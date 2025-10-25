import { Book, Brush, CheckCircle, Circle, Laptop, Phone, PhoneCall } from 'lucide-react';
import { useState } from 'react'
import { Camera, GraduationCap, Heart, Leaf, TreePine, Users } from 'lucide-react';
import service1 from "../assets/conservation.jpeg";
import service2 from '../assets/protectors.jpeg';
import service3 from '../assets/outreach.jpeg';
import service4 from '../assets/adoption.jpeg';
import service5 from '../assets/habitat.jpeg';
import service6 from '../assets/photo_ecosystem.jpeg';


const Services = () => {
    const [activeService,setActiveService] = useState(1);
    const services = [
        {
            id: 1,
            icon: <Leaf className="w-5 h-5 sm:w-6 sm:h-6" />,
            title: "Wildlife Conservation",
            description:
            "We protect endangered species through habitat preservation, breeding programs, and community-driven conservation projects.",
            features: [
            "Habitat preservation initiatives",
            "Endangered species breeding programs",
            "Community education and involvement"
            ],
            color: "bg-pink-400",
            buttonColor: "bg-pink-400 hover:bg-pink-500",
            iconColor: "text-pink-100",
            image: service1
        },
        {
            id: 2,
            icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
            title: "Guided Zoo Tours",
            description:
            "Experience close encounters with rare animals as our expert guides share fascinating facts about their behavior and ecosystems.",
            features: [
            "Interactive guided tours",
            "Safe animal encounter zones",
            "Educational storytelling and fun facts"
            ],
            color: "bg-blue-400",
            buttonColor: "bg-blue-400 hover:bg-blue-500",
            iconColor: "text-blue-100",
            image: service2
        },
        {
            id: 3,
            icon: <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />,
            title: "Education & Outreach",
            description:
            "We inspire the next generation of conservationists through school programs, workshops, and hands-on learning experiences.",
            features: [
            "School outreach programs",
            "Zoo learning workshops",
            "Youth ambassador initiatives"
            ],
            color: "bg-green-400",
            buttonColor: "bg-green-400 hover:bg-green-500",
            iconColor: "text-green-100",
            image: service3
        },
        {
            id: 4,
            icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
            title: "Animal Adoption",
            description:
            "Support wildlife care by adopting an animal. Your contribution helps fund food, medical care, and enrichment for our zoo residents.",
            features: [
            "Symbolic animal adoption packages",
            "Monthly care updates",
            "Recognition on our supporter wall"
            ],
            color: "bg-red-400",
            buttonColor: "bg-red-400 hover:bg-red-500",
            iconColor: "text-red-100",
            image: service4
        },
        {
            id: 5,
            icon: <TreePine className="w-5 h-5 sm:w-6 sm:h-6" />,
            title: "Habitat Restoration",
            description:
            "We partner with local and international organizations to restore and maintain healthy habitats for wildlife survival.",
            features: [
            "Tree planting drives",
            "Wetland and forest restoration",
            "Sustainable habitat design"
            ],
            color: "bg-emerald-400",
            buttonColor: "bg-emerald-400 hover:bg-emerald-500",
            iconColor: "text-emerald-100",
            image: service5
        },
        {
            id: 6,
            icon: <Camera className="w-5 h-5 sm:w-6 sm:h-6" />,
            title: "Eco-Tourism & Photography",
            description:
            "Discover breathtaking natural scenes and photograph wildlife responsibly in their carefully designed habitats.",
            features: [
            "Exclusive wildlife photography zones",
            "Eco-friendly touring experiences",
            "Workshops with nature photographers"
            ],
            color: "bg-yellow-400",
            buttonColor: "bg-yellow-400 hover:bg-yellow-500",
            iconColor: "text-yellow-100",
            image: service6
        }
    ];



  return (
    <section id='services' className='relative overflow-hidden bg-gradient-to-br
    from-gray-50 to-green-50 py-12 px-4 sm:py-16 md:px-12 lg:px-20'>
        <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col lg:flex-col items-center justify-center 
                text-center mb-6' 
                data-aos='fade-down'>
                <div className='flex-1 max-w-2xl mx-auto space-y-6 mb-10 lg:mb-0'>
                    <div>
                        <h2 className='text-3xl sm:text-4xl md:text-5xl text-gray-900'>
                            Our{" "}
                            <span className='font-bold text-black'>
                                Services <span className='text-green-500'>.</span>
                            </span>
                        </h2>
                        <div className='flex justify-center gap-3 mt-4'>
                            <Circle className='text-pink-500 w-5 h-5'/>
                            <Circle className='text-yellow-500 w-5 h-5'/>
                            <Circle className='text-green-500 w-5 h-5'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center"
                data-aos='fade-up'
                data-aos-delay='100'>
                {services.map((service) => (
                    <button
                        key={service.id}
                        onClick={() => setActiveService(service.id)}
                        className={`px-4 py-2 rounded-full text-sm sm:text-base sm:px-6
                            sm:py-3 font-medium transition-all ${
                                activeService === service.id 
                                ?  `${service.color} text-white shadow-lg`
                                : `bg-white text-gray-700 shadow-md hover:shadow-md`
                            }
            `}
                data-aos='fade-up'
                data-aos-delay={service.id * 100}
                >
                        {service.icon}
                        {service.title}
                    </button>
                ))}
            </div>
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl
                p-6 sm:p-8 mb-12 md:mb-16 border border-gray-100"
                data-aos='fade-up'
                data-aos-delay='200'>
                {services.filter(service =>service.id === activeService).map((service) => (
                    <div key={service.id} className='flex flex-col lg:flex-row 
                        gap-6 md:gap-10'>
                        <div className='flex-1'>
                            <div className="flex items-center gap-3 sm:gap-4 sm:mb-6"
                            data-aos='fade-right'
                            data-aos-delay='300'>
                                <div className={`w-12 h-12 sm:h-14 flex items-center sm:rounded-xl 
                                    justify-center rounded-lg ${service.color} bg-opacity-10`}>
                                    <div className={service.iconColor}>
                                        {service.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl sm:text-sxl font-bold text-gray-800">
                                    {service.title}
                                </h3>
                            </div>
                            <p className='text-base sm:text-lg text-gray-700
                                mb-4 sm:mb-6 leading-relaxed'
                                data-aos='fade-right'
                                data-aos-delay='350'
                            >
                                {service.description}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4
                                mb-6 sm:mb-8"
                                data-aos='fade-up'
                                data-aos-delay='400'>
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className='flex items-center gap-2'
                                        data-aos='fade-up'
                                        data-aos-delay={450 + idx * 50}>
                                        <CheckCircle className='w-4 h-4 sm:w-5 sm:h-5 text-green-500
                                            flex-shrink-0'/>
                                        <span className='text-gray-700 text-sm sm:text-base'>
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                                </div>
                                <div className="flex justify-center lg:justify-start"
                                    data-aos='fade-up'
                                    data-aos-delay='600'>
                                        <button className={`px-6 py-3 sm:px-8 ${service.buttonColor}
                                         text-white rounded-full font-medium transition-all shadow-md 
                                         hover:shadow-lg flex items-center gap-2 text-sm sm:text-base`}>
                                            Book for this Service
                                            <PhoneCall className='w-4 h-4 sm:w-5 sm:h-5'/>
                                        </button>
                                </div>
                            </div>
                            <div className="flex-1 mt-6 lg:mt-0" 
                                data-aos='zoom-in'
                                data-aos-delay='500'>
                                    <div className="w-full h-60 sm:72 md:h-80 overflow-hidden
                                        shadow-lg rounded-xl md:rounded-2xl">
                                            <img src={service.image} alt={service.title}
                                                className='object-cover w-full transform hover:scale-105
                                                transition-transform duration-700'/>
                                    </div>
                            </div>
                    </div>
                    
                ))}
                    
            </div>
        </div>
        <div className="hidden md:block absolute border-2 border-pink-500
            top-40 right-10 w-20 h-20 sm:w-24 sm:h-20 md:w-24 md:h-24 rounded-full opacity-50"
            data-aos='zoom-in'
            data-aos-delay='700'
        >
        </div>
        <div className="hidden md:block absolute border-2 border-green-500
            top-40 right-10 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full opacity-50"
            data-aos='zoom-in'
            data-aos-delay='700'
        >
        </div>
    </section>
  )
}

export default Services