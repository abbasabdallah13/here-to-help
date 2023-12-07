import { Html, Head, Body, Text, Container, Tailwind, Img } from "@react-email/components";


type userDetails = {
  firstName: string,
  lastName: string
}

export default function WelcomeEmail(userDetails: userDetails) {
  
  return (
        <Html>
        <Head />
        <Tailwind>
          <Container className="bg-white px-2 mt-4 w-full text-sm">
            <Text className="text-lg text-black">Dear {userDetails?.firstName.charAt(0).toUpperCase()}{userDetails?.firstName.slice(1)} {userDetails?.lastName.charAt(0).toUpperCase()}{userDetails?.lastName.slice(1)},</Text>
            <Text className="text-gray-700">Welcome to Here to Help. Your premier destination for finding service providers. </Text>
            <Text className="text-gray-700">You have successfully registered to our platform using your email address.</Text>
            <Text className="text-gray-700">You can now simply login to our website using your account and benefit from our services that are tailored to ease your service search process.</Text>
            <Text className="text-gray-700">Have a wonderful tour 😀</Text>
            <Container className="flex items-center justify-center w-full">
              <Img className="w-20 h-20" src="https://lh3.googleusercontent.com/pw/ADCreHdRxjvMeOh8OJojyfYNytWNRwGH22829ZCdv1KCV7uZNZ6ZV4jTHOUlUposXOqnxPCELPt1_Y5sCgtvTA7nGREdvNo6Fy0oVV0ydln7HxbhbRpznT49uV-TsPNm7N08pT89r8rN_hk8DzlgruOnAWUwxD-9PTU11ndcvNpJ3kqEK9WeGGgjGBcXxc1dIa3zx-VhVjJFqHzVLku9YlkUb_jyZe_fEzh4XF5istpDzrztNU8LIyJ_0hk2JSysaqWJdi-79-vFuIYjAXpgNOq_5JPWidW6MEwGUdrNFA2SZCe1WeIpX8LSE2a5iTsCUg47ePIiOw0rhzl1l-zqFYvW35iJB1_N5yJued4j7JCTeumFh6Yr692NvFsc7XS_XUtRaJ7o_U19P6wYY3v1SYwkoRMjmn3jIQD4PAnuaE5lbkDr_ucqg9eEjWZZsJefDQ4V-6v7NMR-h20UXXrMyfVneJvv0fCXNR4-ifX1Dp5Ykb1c-nk1sWHnUPEJOhP3mGCwJwb5p3lQrSCN1FgBRqo2a-CRsUwEbI3fBeDKqOZIEEix5x2meH5eLg1OTpUAbcuxQv9GXDDAgcwawz3O7K_D2fcVpQLcc5P9-DklHmSm7f4ULzTYEnlzKmtja8ciwtHFkn7hvVjNeFUTANAl6v0ZTsrNSWPge39F9jbaflolscMXSUn9Q5Qsy3kVsk59RUTTjDqbDlpQaBtZvJVF_V9Zn4YssxfKXNf4GIVHLxjY6XK5s1UcYLjg-uTgbXam1wUTavziK-tKZpXa2ObKK4YKL10bu8ATfXbN1r_DiXuZAVXbNbj-nHTRp1wVVjQXr0PxCktDoIGNuQWiQqp3_uFTjYN0sjzWUhW-KFvju5q4DcY2LMvwGtG-dpqWuY7CswA_Ygn7WHGOLqQf0LndqMFWOy01-z4rRKk5Y-aaVIf6-WRuDxasvjDtPI23p5LAdt-vGES0uSa8Nb-i_WjximdPTmLP2YX_3Q=w127-h128-s-no-gm?authuser=1" alt='logo' />
            </Container>
          </Container>
        </Tailwind>
        </Html>


  );
}
