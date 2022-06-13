import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const Experience = () => {
  const allExperiences = [
    {
      icon: "✨",
      label: "FRONTEND",
      item: ["HTML", "CSS", "jQuery", "Bootstrap", "React", "Tailwind"],
    },
    { icon: "💻", label: "BACKEND", item: ["PHP", "Ruby", "Ruby On Rails"] },
    { icon: "🌵", label: "CMS", item: ["WordPress", "MakeShop", "Shopify"] },
  ];

  const [frontend, backend, cms] = allExperiences;
  const tabs = [frontend, backend, cms];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <motion.div
      id="experience"
      className="pb-20 mr-3 ml-3"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.0 }}
    >
      <h2>EXPERIENCES</h2>
      <div className="card">
        <nav>
          <ul className="flex">
            {tabs.map((item) => (
              <li
                key={item.label}
                className={item === selectedTab ? "selected" : ""}
                onClick={() => setSelectedTab(item)}
              >
                {`${item.icon} ${item.label}`}
                {item === selectedTab ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <main>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="grid grid-cols-3">
                {selectedTab.item.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </motion.div>
  );
};

export default Experience;
