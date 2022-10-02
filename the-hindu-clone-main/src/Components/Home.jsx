import {Box,Image,Heading,Text} from "@chakra-ui/react"
import Logo from "./Logo"
import Navbar from "./Navbar"
import {Footer} from "../Components/Footer/Footer.jsx"
import { useState } from "react"
import { useEffect } from "react"
export default function Home(){
    const [data,setData]=useState([])
    async function getData(){
        let res= await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=0a3c3a373a274287bc52b85f679828b8`)
        let data=await res.json();
        setData(data.articles)
    }
   
    
    useEffect(()=>{
        
        getData()
        
    },[])
  
    console.log(data)
    // console.log(data[0].urlToImage)
    return<Box display="flex">
        <Box w="12%" h="640px" border="1px red" position="sticky" top="0">
        <a href="https://www.amazon.in/"><Image h="100%" w="100%" src="https://tpc.googlesyndication.com/simgad/7649669636389231315" alt="1img"/></a>
        </Box>
        <Box w="76%">
            <Logo/>
            <Navbar/>
            <Box h="540px" w="97.5%" m="auto" marginBottom="40px" border="1px blue" display="flex" justifyContent="space-between">
                <Box h="100%" w="32%" border="1px violet">
                    <Box w="100%" h="73.6%" border="1px yellow" marginBottom="7%">
                        <Box w="100%" h="50%" border="1px purple">
                            <Image h="100%" w="100%" src="https://th-i.thgim.com/public/incoming/fhulez/article65960339.ece/alternates/LANDSCAPE_320/PTI09_26_2022_000040B.jpg" alt="Mimg"/>
                        </Box>
                        <Box w="100%" h="50%" border="1px purple" bg="#133B5A" paddingBottom="10px">
                            <Heading color="white" fontFamily="TundraWeb" fontWeight="regular" textAlign="left" fontSize="24px">Religious tourism gets a push in Jammu and Kashmir</Heading>
                            <Text color="white" fontFamily="Firasans" fontWeight="600" textAlign="left" fontSize="11px" mt="10px">SREEPARNA CHAKRABARTY</Text>
                            <Text color="gray" fontFamily="TundraWeb" fontWeight="regular" textAlign="left" fontSize="14px" mt="10px">The Union Territory administration is offering special packages for the ongoing Navratri festival to extend the stay of Hindu pilgrims</Text>
                        </Box>
                    </Box>
                    <Box w="100%" h="22.4%" border="1px brown" display="flex" justifyContent="space-between">
                        <Box w="37%" h="100%" border="1px black">
                        <Image h="100%" w="100%" src="https://th-i.thgim.com/public/news/national/8nxazt/article65958374.ece/alternates/SQUARE_115/Digvijaya-Chidambaram.jpg" alt="1img"/>
                        </Box>
                        <Box w="61%" h="100%" border="1px black">
                            <Text textAlign="left" color="red" fontSize="12px" fontFamily="Fira Sans">GROUND ZERO <Text color="#133B5A" as="span">OTHER STATE</Text></Text>
                            <Text textAlign="left" color="black" fontSize="16px" fontFamily="TundraWeb">Kharge asks Sonia to pick new Leader of the Opposition in Rajya Sabha
</Text>
                        </Box>
                    </Box>
                </Box>
                <Box h="100%" w="32%" border="1px violet">
                    <Box h="22.4%" w="100%" border="1px black" mb="6%" display="flex" justifyContent="space-between">
                    <Box w="37%" h="100%" border="1px black">
                        <Image h="100%" w="100%" src="https://th-i.thgim.com/public/news/national/t3gkwu/article65960309.ece/alternates/SQUARE_115/madrasas%20sept.JPG" alt="1img"/>
                        </Box>
                        <Box w="61%" h="100%" border="1px black">
                            <Text textAlign="left" color="#133B5A" fontSize="12px" fontFamily="Fira Sans">PFI BAN INDIA</Text>
                            <Text textAlign="left" color="black" fontSize="16px" fontFamily="TundraWeb">Jamiat lends silent support to BJP amid crackdown on PFI, madrasa survey
</Text>
                        </Box>
                    </Box>
                    <Box h="22.4%" w="100%" border="1px black" mb="6%" display="flex" justifyContent="space-between">
                    <Box w="37%" h="100%" border="1px black">
                        <Image h="100%" w="100%" src="https://th-i.thgim.com/public/news/national/tamil-nadu/hwqhs1/article65960528.ece/alternates/SQUARE_115/pocso_ki30.jpg" alt="1img"/>
                        </Box>
                        <Box w="61%" h="100%" border="1px black">
                            <Text textAlign="left" color="#133B5A" fontSize="12px" fontFamily="Fira Sans">
POCSO | TAMIL NADU</Text>
                            <Text textAlign="left" color="black" fontSize="16px" fontFamily="TundraWeb">
The persecution of consent </Text>
                        </Box>
                    </Box>
                    <Box h="22.4%" w="100%" border="1px black" mb="6%" display="flex" justifyContent="space-between">
                    <Box w="37%" h="100%" border="1px black">
                        <Image h="100%" w="100%" src="https://th-i.thgim.com/public/incoming/u0ida5/article65960425.ece/alternates/SQUARE_115/6751_21-10-2019_13-38-59_4_08-POLICECOMMEMORATIONDAY-SGR-21-10-2019.JPG" alt="1img"/>
                        </Box>
                        <Box w="61%" h="100%" border="1px black">
                            <Text textAlign="left" color="#133B5A" fontSize="12px" fontFamily="Fira Sans">INDIA</Text>
                            <Text textAlign="left" color="black" fontSize="16px" fontFamily="TundraWeb">Satyapal Malik gets no extension, Brig. Mishra to take charge as Meghalaya Governor</Text>
                        </Box>
                    </Box>
                    <Box h="22.4%" w="100%" border="1px black" display="flex" justifyContent="space-between">
                    <Box w="37%" h="100%" border="1px black">
                        <Image h="100%" w="100%" src="https://th-i.thgim.com/public/incoming/b3jyrr/article65960263.ece/alternates/SQUARE_115/IMG_SHASHI_THAROOR_2_1_0OA746HB.jpg" alt="1img"/>
                        </Box>
                        <Box w="61%" h="100%" border="1px black">
                            <Text textAlign="left" color="#133B5A" fontSize="12px" fontFamily="Fira Sans">ANALYSIS | INDIA</Text>
                            <Text textAlign="left" color="black" fontSize="16px" fontFamily="TundraWeb">Shashi Tharoor: the president the Congress needs but won’t get
</Text>
                        </Box>
                    </Box>
                </Box>
                <Box h="100%" w="32%" border="1px violet">
                    <Box h="48%" w="100%" border="1px purple" mb="7%">
                    <a href="https://www.amazon.in/"><Image h="100%" w="100%" src="https://tpc.googlesyndication.com/simgad/18348950570091986762?" alt="1img"/></a>
                    </Box>
                    <Box h="48%" w="100%" border="1px purple">
                        <Box h="41%" w="100%" border="1px brown" mb="6%">
                        <Image h="100%" w="100%" src="https://s0.2mdn.net/dfp/341718/4636217693/1664536428355/CASHBACK%20SBI%20Card/115x71.jpg" alt="1img"/>
                        </Box>
                        <Box h="41%" w="100%" border="1px brown">
                        <a href="https://www.amazon.in/">
                        <Image h="100%" w="100%" src="https://tpc.googlesyndication.com/simgad/12340129004741262474" alt="1img"/></a>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Footer/>
        </Box>
        <Box w="12%" h="640px" border="1px green" position="sticky" top="0">
        <a href="https://www.amazon.in/"><Image h="100%" w="100%" src="https://tpc.googlesyndication.com/simgad/16296423811896506465" alt="1img"/></a>
        </Box>
    </Box>
}