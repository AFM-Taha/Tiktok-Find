import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import UseAdmin from '@/hooks/useAdmin';
import Spinner from '../userComponents/common/Spinner';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const withAdmin = (WrappedComponent: any) => {
    const AuthenticatedComponent = (props: any) => {
        const [admin, adminLoading] = UseAdmin();
        const [user, loading] = useAuthState(auth);
        const router = useRouter();

        (loading || adminLoading) && <Spinner />


        useEffect(() => {
            // Redirect to login page or any other public page
            if (!user && !admin) {

                router.push({
                    pathname: '/admin/login',
                    query: { from: router.pathname },
                    // console.log(router.pathname);
                });
            };
        })


        return <WrappedComponent {...props} />


    };


    return AuthenticatedComponent;
};

export default withAdmin;