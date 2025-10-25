import { Mail, Phone, MapPin, Clock, Share2, Circle, Send, Heart, DotIcon } from 'lucide-react';
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { GiHeartBeats } from 'react-icons/gi';
import { SiAnimalplanet } from 'react-icons/si';

const Footer = () => {
    const mediaLinks = [
        {icon: FaTwitter, href: 'https://x.com/dorcas_tunmise',color:"hover:bg-pink-600"},
        {icon: FaLinkedin, href: 'https://www.linkedin.com/in/oluwatunmise-alimi-563915225/',color:"hover:bg-blue-500"},
        {icon: FaGithub, href: 'https://github.com/Dorcastunmise/',color:"hover:bg-pink-600"}
    ];

    const quickLinks = [
        {name: "Home", href: "#"},
        {name: "About", href: "#about"},
        {name: "Company", href: "#company"},
        {name: "Services", href: "#services"},
        {name: "Contact", href: "#contact"},
    ];

    const services = [
        {name: "Wildlife Conservation", href: "#"},
        {name: "Animal Rescue", href: "#"},
        {name: "Educational Programs", href: "#"},
        {name: "Research Initiatives", href: "#"},
        {name: "Community Outreach", href: "#"},
    ];

    const contactInfo = [
        {icon: Phone, text: "+234 8250 005 172", color:"text-pink-500"},
        {icon: Mail, text: "oluwatunmisealimi67@gmail.com", color:"text-yellow-500"},
        {icon: MapPin, text: "123 Conservation Ave, Lagos, Nigeria", color:"text-putple-500"},
        {icon: Clock, text: "Mon - Fri: 9:00 AM - 5:00 PM", color:"text-red-500"},
        {icon: Share2, text: "@wildlifeconnect", color:"text-green-500"},
    ];

    const decorativeDots = [
        {size: "w-20 h-20 sm:w-24 sm:h-24", border: "border-pink-300", top: "top-10", left: "left-5", animationDelay: "0s"},
        {size: "w-16 h-16 sm:w-20 sm:h-20", border: "border-yellow-300", top: "top-1/2", left: "left-10", animationDelay: "1s"},
        {size: "w-24 h-24 sm:w-28 sm:h-28", border: "border-green-300", top: "top-1/3", right: "right-5", animationDelay: "2s"},
        {size: "w-12 h-12 sm:w-16 sm:h-16", border: "border-blue-300", bottom: "bottom-10", right: "right-10", animationDelay: "3s"}
    ];
    
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br
        from-gray-900 to-gray-800 text-white py-12 px-4 sm:py-16 md:py-20
        md:px-12 lg:px-20"
    >
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-8
            md:gap-12 mb-12">
                <div className="space-y-6">
                    <div className="flex items-center text-2xl font-bold">
                        <div className="w-10 h-10 flex items-center justify-center
                        rounded-full border-4 border-pink-600 text-pink-600 mr-2">
                            S
                        </div>
                        <span>
                            afari <span className="text-yellow-500">
                                Zoo
                            </span>
                        </span>
                    </div>
                    <p className='text-gray-300 leading-relaxed'>
                        Safari Zoo is a sanctuary for wildlife enthusiasts, offering
                        an immersive experience to connect with nature and learn about
                        animal conservation. It is dedicated to wildlife conservation and education,
                        fostering a deeper connection between humans and animals.                    
                    </p>
                    <div className="flex gap-4">
                        {mediaLinks.map((social, idx) => (
                            <a key={idx} href={social.href}
                            className={`w-10 h-10 rounded-full bg-gray-700 flex items-center
                                justify-center transition-colors ${social.color}`}
                            >
                                <social.icon className="w-5 h-5"/>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-xl font-semibold border-pink-600 pb-2 inline-block">
                        Quick Links
                    </h3>
                    <ul className="space-y-3">
                        {quickLinks.map((link, idx) => (
                            <li key={idx}>
                                <a href={link.href} className="hover:text-pink-500 transition-colors">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold border-pink-600 pb-2 inline-block">
                        Services
                    </h3>
                    <ul className="space-y-3">
                        {services.map((service, idx) => (
                            <li key={idx}>
                                <a href={service.href} className="hover:text-pink-500 transition-colors">
                                    {service.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold border-pink-600 pb-2 inline-block">
                        Contact Information
                    </h3>
                    <ul className="space-y-3">
                        {contactInfo.map((contact, idx) => (
                            <div key={idx} className={`flex items-center gap-3 
                                ${contact.multiline ? 'items-start' : ''}`}
                            >
                                <div className="w-10 h-10 rounded-full bg-gray-700 flex 
                                    items-center justify-center flex-shrink-0">
                                        <contact.icon className={`w-5 h-5 ${contact.color}`}/>
                                </div>
                                <div>
                                    <p className="text-gray-300 whitespace-pre-line">
                                        {contact.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>

            </div>

            <div className="relative w-full h-64">
                {decorativeDots.map((dot, idx) => (
                    <SiAnimalplanet
                    key={idx}
                    className={`absolute ${dot.border} ${dot.size} ${dot.top || ''} ${dot.left || ''} ${dot.right || ''} ${dot.bottom || ''} opacity-70 animate-bounce`}
                    style={{ animationDelay: dot.animationDelay }}
                    />
                ))}
            </div>


            <div className="border-t border-gray-700 pt-8 text-center">
                <p className="text-gray-400 flex items-center justify-center gap-1">
                    <span>© 2025 Safari Zoo. All rights reserved.</span>
                    <Heart className='w-4 h-4 text-pink-500 fill-current'/>
                </p>
            </div>

        </div>

        <div className="absolute border-2 border-pink-500 
            bottom-20 left-10 w-16 h-16 rounded-full opacity-20"
        >            
        </div>
        <div className="absolute border-2 border-yellow-500 
            top-20 right-10 w-20 h-20 rounded-full opacity-20"
        >            
        </div>
    </footer>
  )
}

export default Footer