
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
            mt={"70px"}
            p={"1em"}
        >
            <AvatarImage />
            <CardHeader
                display={"flex"}
                gap={"1em"}
                justifyContent={"start"}
                w={'100%'}
                pb={"0"}
                mt={"40px"}
            >
                <EmailImage />
                <Box>
                    <Heading
                        size='md'
                        fontWeight={"normal"}
                        letterSpacing={"widest"}
                    > Get In</Heading>
                    <Heading size='md' letterSpacing={"widest"}> Touch</Heading>

                </Box>

            </CardHeader>
            <CardBody>
                <ContactForm />
            </CardBody>

        </Card>
    )
}


