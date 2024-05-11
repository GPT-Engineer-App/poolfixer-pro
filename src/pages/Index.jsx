import { Box, Container, Flex, Heading, IconButton, Input, Stack, Text, VStack, Button, useBreakpointValue, Image, SimpleGrid, Icon, FormControl, FormLabel, Textarea, HStack } from "@chakra-ui/react";
import { FaBars, FaCheck, FaPhone, FaRocket, FaStar, FaUser } from "react-icons/fa";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        <Header />
        <ServicesSection />
        <BookingForm />
        <Testimonials />
        <TipsSection />
        <Footer />
      </Flex>
    </Container>
  );
};

const Header = () => (
  <Flex as="header" w="full" py={4} px={8} bg="white" align="center" justify="space-between" position="fixed" top={0} zIndex={1}>
    <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb29sZml4cHJvJTIwbG9nb3xlbnwwfHx8fDE3MTU0NDUyMzR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="PoolFixPro Logo" boxSize="100px" />
    <Stack direction={{ base: "column", md: "row" }} spacing={4} align="center">
      <Text>Home</Text>
      <Text>Services</Text>
      <Text>About Us</Text>
      <Text>Contact</Text>
    </Stack>
    <IconButton aria-label="Open Menu" icon={<FaBars />} display={{ md: "none" }} />
    <Button colorScheme="blue" leftIcon={<FaPhone />} display={{ base: "none", md: "inline-flex" }}>
      Call Now
    </Button>
  </Flex>
);

const ServicesSection = () => (
  <VStack spacing={8} py={20} px={8} mt="100px">
    <Heading as="h2" size="xl">
      Our Services
    </Heading>
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
      {["Maintenance", "Emergency Repairs", "Seasonal Check-Ups"].map((service) => (
        <Box key={service} p={5} shadow="md" borderWidth="1px">
          <Icon as={FaRocket} w={10} h={10} mb={4} />
          <Text fontWeight="bold">{service}</Text>
          <Text mt={2}>Detailed information about {service.toLowerCase()}.</Text>
        </Box>
      ))}
    </SimpleGrid>
  </VStack>
);

const BookingForm = () => (
  <Flex align="center" justify="center" bg="teal.500" color="white" p={8}>
    <VStack spacing={4} as="form" w="full" maxW="md">
      <Heading as="h3" size="lg">
        Book a Service
      </Heading>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Your Name" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Service Needed</FormLabel>
        <Input placeholder="Type of Service" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Date</FormLabel>
        <Input type="date" />
      </FormControl>
      <Button leftIcon={<FaCheck />} colorScheme="green" w="full" type="submit">
        Submit
      </Button>
    </VStack>
  </Flex>
);

const Testimonials = () => (
  <VStack spacing={8} py={20} px={8} bg="gray.100">
    <Heading as="h2" size="xl">
      Customer Testimonials
    </Heading>
    <Stack direction={{ base: "column", md: "row" }} spacing={8}>
      <Box p={5} shadow="md" borderWidth="1px">
        <Text as="cite">"Excellent service every time!"</Text>
        <Text>- John Doe</Text>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Text as="cite">"They fixed my pool overnight!"</Text>
        <Text>- Jane Smith</Text>
      </Box>
    </Stack>
  </VStack>
);

const TipsSection = () => (
  <VStack spacing={8} py={20} px={8}>
    <Heading as="h2" size="xl">
      Pool Maintenance Tips
    </Heading>
    <Text>Check out our latest tips on keeping your pool in perfect condition!</Text>
  </VStack>
);

const Footer = () => (
  <Flex as="footer" py={4} px={8} bg="gray.800" color="white" mt="auto">
    <Stack direction={{ base: "column", md: "row" }} spacing={4} w="full" justify="space-between">
      <Text>&copy; {new Date().getFullYear()} PoolFixPro. All rights reserved.</Text>
      <HStack spacing={4}>
        <Icon as={FaStar} />
        <Icon as={FaUser} />
      </HStack>
    </Stack>
  </Flex>
);

export default Index;
