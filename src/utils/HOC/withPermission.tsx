/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux'
import { Navigate } from 'react-router-dom'

type Role = 'admin' | 'customer' | undefined

const withPermission =
  // eslint-disable-next-line react/display-name


    (roles: Role[], redirect = '') =>
    (Component: FC<any>) =>
    // eslint-disable-next-line react/display-name
    (props: any) => {
      const auth = useSelector((state: RootState) => ({
        profile: state.authentication.profile
      }))

      return roles.includes(auth.profile?.role) ? (
        <Component {...props} />
      ) : redirect ? (
        <Navigate to={redirect} />
      ) : null
    }

export default withPermission
