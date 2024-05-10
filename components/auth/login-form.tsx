import CardWrapper from "./card-wrapper"

export const LoginForm = () => {
    return (
        <>
          <CardWrapper headerLabel="Wellcome Back"
            backButtonLabel="Don't have accout"
            backButtonHref="/auth/register"
            showSocial >
              Login Form !!
          </CardWrapper>
        </>
    )
}