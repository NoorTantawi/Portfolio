import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

interface ProfileAvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const ProfileAvatar = ({ 
  src = "/profile-photo.jpg", 
  alt = "Nooraldeen Tantawi", 
  size = 'lg',
  className = ""
}: ProfileAvatarProps) => {
  const sizeClasses = {
    sm: "h-16 w-16",
    md: "h-24 w-24", 
    lg: "h-32 w-32",
    xl: "h-48 w-48"
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`${className}`}
    >
      <Avatar className={`${sizeClasses[size]} border-4 border-blue-400 shadow-lg`}>
        <AvatarImage 
          src={src} 
          alt={alt}
          className="object-cover"
        />
        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-2xl font-bold">
          NT
        </AvatarFallback>
      </Avatar>
    </motion.div>
  );
};

export default ProfileAvatar;