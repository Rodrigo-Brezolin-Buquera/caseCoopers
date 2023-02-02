import { Avatar, Box } from "@chakra-ui/react"
import AvatarPhoto from "../../../../../assets/AvatarPhoto.png"

export const AvatarImage = () => {
    return (
        <Box position={"absolute"} top={"-50px"} >

            <Box
                h={"20px"}
                w={"160px"}
                background={"brand.100"}
                position={"absolute"}
                bottom={"40%"} right={"30%"}
               
            />
            <Avatar
                size='2xl'
                src={AvatarPhoto}
            />
        </Box>

    )
}