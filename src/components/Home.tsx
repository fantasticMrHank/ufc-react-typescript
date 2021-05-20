import React from "react";
import { motion } from 'framer-motion';

export interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
    return (
        <div>
            <motion.h2

                initial={{
                    color: 'black',
                    x: 0,
                }}
                animate={{
                    color: 'red',
                    x: 250,

                }}>
                Home Page
            </motion.h2>

            <motion.button
                transition={{
                    delay: 0.5
                }}
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1,
                    scale: 2,
                    x: 100
                }}>
                Click Me
            </motion.button>
        </div>
    );
}

export default Home;