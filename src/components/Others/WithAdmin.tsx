import React, { useEffect } from 'react';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import UseAdmin from '@/hooks/useAdmin';

const withAdmin = (WrappedComponent: any) => {
    const AuthenticatedComponent = (props: any) => {
        const [user] = useAuthState(auth);
        const [admin] = UseAdmin(user);
        const router = useRouter();

        console.log("admin", admin);

        useEffect(() => {
            const unsubscribe = () => {
                if (!admin) {
                    // Redirect to login page or any other public page
                    router.push({
                        pathname: '/admin/login',
                        query: { from: router.pathname },
                    });
                    // console.log(router.pathname);
                }
            };

            return () => {
                unsubscribe();
            };
        }, [admin, router]);

        return <WrappedComponent {...props} />;
    };

    return AuthenticatedComponent;
};

export default withAdmin;