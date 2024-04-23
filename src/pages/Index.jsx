import { Box, Container, Heading, Text, Button, Image, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Digital Marketing Solutions
          </Heading>
          <Text fontSize="xl">Boost your brand's online presence with our comprehensive digital marketing services.</Text>
        </Box>
        <Image src="https://images.unsplash.com/photo-1557838923-2985c318be48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDB8fHx8MTcxMzg5ODM2Nnww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />

        <VStack spacing={8}>
          <Heading as="h2" size="lg">
            Our Services
          </Heading>
          <HStack spacing={5}>
            <ServiceCard title="Social Media" icon={FaFacebookF} description="Expand your reach on platforms like Facebook, Instagram, and more." />
            <ServiceCard title="SEO" icon={FaTwitter} description="Improve your search engine ranking and drive more traffic." />
            <ServiceCard title="Content Marketing" icon={FaInstagram} description="Engage your audience with high-quality content." />
            <ServiceCard title="Email Marketing" icon={FaLinkedinIn} description="Targeted campaigns to keep your customers engaged." />
            <ServiceCard title="Video Marketing" icon={FaYoutube} description="Create compelling video content to tell your brand's story." />
          </HStack>
        </VStack>

        <Button colorScheme="blue" size="lg">
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

const ServiceCard = ({ title, icon, description }) => (
  <VStack bg="gray.100" p={4} borderRadius="md" width="180px" height="200px" align="center">
    <Icon as={icon} w={10} h={10} mb={2} />
    <Text fontWeight="bold">{title}</Text>
    <Text textAlign="center" fontSize="sm">
      {description}
    </Text>
  </VStack>
);

export default Index;
