const baseUrl:string = 'http://localhost:8000/admin';

export const signupUrl = `${baseUrl}/signup`
export const singinUrl = `${baseUrl}/signin`
export const forgtoPasswordUrl = `${baseUrl}/forgotPassword`
export const logoutUrl = `${baseUrl}/logout`

export const profileUrl = `${baseUrl}/profile`
export const updateProfileUrl = (_id)=> `${baseUrl}/update_profile/${_id}`
export const changePasswordUrl = (_id)=> `${baseUrl}/change_password/${_id}`
export const adminListing = `${baseUrl}/admin_listing`
