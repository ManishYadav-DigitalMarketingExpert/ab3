import { motion } from "framer-motion";
import { Button, ButtonProps } from "./button";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode;
  glowColor?: string;
}

export const AnimatedButton = ({
  children,
  className,
  glowColor = "rgb(59, 130, 246)",
  ...props
}: AnimatedButtonProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <motion.div
        className="absolute inset-0 rounded-md opacity-0"
        style={{
          background: `linear-gradient(45deg, ${glowColor}, transparent, ${glowColor})`,
          filter: "blur(20px)",
        }}
        whileHover={{ opacity: 0.3 }}
        transition={{ duration: 0.3 }}
      />
      <Button
        className={cn(
          "relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg transition-all duration-300",
          className,
        )}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
};
