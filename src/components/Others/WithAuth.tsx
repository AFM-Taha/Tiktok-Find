import React, { useEffect } from 'react';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent: any) => {
    const AuthenticatedComponent = (props: any) => {
        const [user] = useAuthState(auth);
        const router = useRouter();

        useEffect(() => {
            const unsubscribe = () => {
                if (!user) {
                    // Redirect to login page or any other public page
                    router.push({
                        pathname: '/signin',
                        query: { from: router.pathname },
                    });
                }
            };

            return () => {
                unsubscribe();
            };
        }, [user, router]);

        return <WrappedComponent {...props} />;
    };

    return AuthenticatedComponent;
};

export default withAuth;