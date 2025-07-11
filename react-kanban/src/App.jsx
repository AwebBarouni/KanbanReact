// App.jsx
import React from "react";
import Card from "./components/Card";
import "./App.css";

const App = () => {
  const cardsData = [
    {
      category: "UX",
      title: "Research FAQ page UX",
      attachments: 4,
      comments: 12,
      avatars: [
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&facepad=2",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face&facepad=2",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face&facepad=2",
      ],
      categoryColor: "ux",
    },
    {
      category: "Code Review",
      title: "Review Javascript code",
      attachments: 2,
      comments: 8,
      avatars: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&facepad=2",
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face&facepad=2",
      ],
      categoryColor: "code-review",
    },
    {
      category: "Info",
      title: "Review completed Apps",
      attachments: 8,
      comments: 17,
      avatars: [
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face&facepad=2",
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=40&h=40&fit=crop&crop=face&facepad=2",
      ],
      categoryColor: "info",
    },

    {
      category: "app",
      title: "Find new images for pages",
      attachments: 10,
      comments: 18,
      avatars: [
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=40&h=40&fit=crop&crop=face&facepad=2",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=40&h=40&fit=crop&crop=face&facepad=2",
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=40&h=40&fit=crop&crop=face&facepad=2",
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=40&h=40&fit=crop&crop=face&facepad=2",
      ],
      categoryColor: "images",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
    },
    {
      category: "iOS App",
      title: "Food delivery ios app",
      attachments: 2,
      comments: 8,
      avatars: [
        "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=40&h=40&fit=crop&crop=face&facepad=2",
        "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=40&h=40&fit=crop&crop=face&facepad=2",
      ],
      categoryColor: "ios",
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=200&fit=crop",
    },
    {
      category: "App",
      title: "Forms & Tables section",
      attachments: 1,
      comments: 4,
      avatars: [],
      categoryColor: "app",
    },
  ];

  const handleMenuClick = (cardTitle) => {
    console.log(`Menu clicked for: ${cardTitle}`);
    // Add your menu logic here
  };

  return (
    <div className="app">
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            category={card.category}
            title={card.title}
            attachments={card.attachments}
            comments={card.comments}
            avatars={card.avatars}
            categoryColor={card.categoryColor}
            image={card.image}
            onMenuClick={() => handleMenuClick(card.title)}
          />
        ))}

        <div className="add-card">
          <button className="add-button">
            <span>+</span>
            Add New Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
