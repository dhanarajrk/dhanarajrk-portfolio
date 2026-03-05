import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-6xl w-full mx-auto px-4">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>

        {/* Outer Box */}
        <div className="bg-light p-10 rounded-2xl border border-gray-300 shadow-md">

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Experience 1 */}
            <div className="bg-lightest p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold">
                MERN Stack Web Development Training
              </h3>

              <p className="text-lg text-gray-600">
                TuteDude | Mar 2024 – Jul 2024
              </p>

              <ul className="text-lg text-left text-gray-700 mt-4 list-disc list-inside space-y-2">
                <li>
                  Completed the MERN Stack Development Course, gaining proficiency in MongoDB, Express.js, React, and Node.js.
                </li>
                <li>
                  Built and tested full-stack applications including e-commerce and task manager apps.
                </li>
                <li>
                  Optimized APIs and MongoDB management resulting in a 20% increase in performance.
                </li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="bg-lightest p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold">
                Web Development Internship
              </h3>

              <p className="text-lg text-gray-600">
                CodSoft | Oct 2023 – Nov 2023
              </p>

              <ul className="text-lg text-left text-gray-700 mt-4 list-disc list-inside space-y-2">
                <li>
                  Gained hands-on experience with HTML5, CSS3, JavaScript and modern web development practices.
                </li>
                <li>
                  Completed projects such as portfolio sites and landing pages.
                </li>
                <li>
                  Enhanced deployment skills improving efficiency by 50%.
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Experience;