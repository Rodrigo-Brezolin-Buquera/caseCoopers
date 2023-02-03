import { useForm } from "react-hook-form";
import {
    FormErrorMessage,
    FormControl,
    Box,
    Input,
    Button, Text, Textarea
} from "@chakra-ui/react";



export const ContactForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        reset
    } = useForm();

    const onSubmit = async (values) => {
        alert("Informações enviadas")
        reset()
    }

    return (
        <Box
            w={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <form onSubmit={handleSubmit(onSubmit)} >
                <FormControl isInvalid={errors.email || errors.password}>
                    <Box
                        minW={"250px"}
                        display={"flex"}
                        flexDirection={"column"}
                        gap={"0.5em"}
                    >

                        <Text >Your name</Text>
                        <Input
                            id="name"
                            placeholder="Type your name here"
                            {...register("name", {
                                required: "Insert your name",
                            })}
                            variant="outline"
                            borderRadius={"4px"}
                            borderColor={"black"}
                        />
                        <Box display={"flex"} gap={'1em'} >

                            <Box>
                                <Text  >Email*</Text>
                                <Input
                                    id="email"
                                    placeholder="example@example.com"
                                    {...register("email", {
                                        required: "Insert your email",
                                    })}
                                    variant="outline"
                                    borderRadius={"4px"}
                                    borderColor={"black"}
                                />
                            </Box>

                            <Box>
                                <Text  >Telephone*</Text>
                                <Input
                                    id="telephone"
                                    placeholder="(  ) ____-____"
                                    {...register("telephone", {
                                        required: "Insert your telephone",
                                    })}
                                    variant="outline"
                                    borderRadius={"4px"}
                                    borderColor={"black"}
                                />
                            </Box>

                        </Box>


                        <Text  >Message*</Text>
                        <Textarea
                            id="message"
                            placeholder="Type what you want to say to us"
                            {...register("message", {
                                required: "Insert your message",
                            })}
                            variant="outline"
                            borderRadius={"4px"}
                            borderColor={"black"}
                            h={"150px"}
                          
                        />

                        <Button
                            mt={4}
                            isLoading={isSubmitting}
                            type="submit"
                            bg={"brand.100"}
                            borderRadius={"4px"}
                        >

                            <Text fontSize={"sm"} color={"brand.400"} >
                                SEND NOW
                            </Text>
                        </Button>
                    </Box>
                    <FormErrorMessage display={"flex"} flexDirection={"column"} alignItems={"center"}>
                        {errors.name && errors.name.message}
                        <br />
                        {errors.email && errors.email.message}
                        <br />
                        {errors.telephone && errors.telephone.message}
                        <br />
                        {errors.message && errors.message.message}
                        <br />
                    </FormErrorMessage>
                </FormControl>
            </form>
        </Box>
    )
}



