
import React from "react";
import { Box, Card, CardHeader, Heading, CardBody } from "@chakra-ui/react";
import { ContactForm } from "./ContactForm";
import { EmailImage } from "../../../../../components/EmailIcon";
import { AvatarImage } from "./AvatarImage";

export const ContactCard = () => {
    return (
        <Card
            align='center'
            backgroundColor={"Background.400"}
            minW={"380px"}
            position={"relative"}
            pt={"50px"}
            mt={"70px"}
        >
            <AvatarImage />
            <CardHeader
                display={"flex"}
                gap={"1em"}
                justifyContent={"start"}
                w={'100%'}
                pb={"0"}
            >
                <EmailImage />
                <Box>
                    <Heading size='md'> Get In</Heading>
                    <Heading size='md'> Touch</Heading>
                </Box>

            </CardHeader>
            <CardBody>
                <ContactForm />
            </CardBody>

        </Card>
    )
}


