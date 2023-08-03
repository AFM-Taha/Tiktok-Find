import React, { useEffect } from 'react';
import Router from 'next/router';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const withAuth = (WrappedComponent: any) => {
    const AuthenticatedComponent = (props: any) => {
        const [user] = useAuthState(auth);
        console.log(auth);
        useEffect(() => {
            const unsubscribe = () => {
                if (!user) {
                    // Redirect to login page or any other public page
                    Router.push('/signin');
                }
            };

            return () => {
                unsubscribe();
            };
        }, [user]);

        return <WrappedComponent {...props} />;
    };

    return AuthenticatedComponent;
};

export default withAuth;