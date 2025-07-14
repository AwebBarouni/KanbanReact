import React, { useState } from "react";
import { Paperclip, MessageCircle, Plus, MoreVertical } from "lucide-react";
import "./App.css";

const Card = ({
  category,
  title,
  attachments,
  comments,
  avatars,
  categoryColor,
  image,
  onMenuClick,
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <span className={`category-tag ${categoryColor}`}>{category}</span>
        <button className="menu-dots" onClick={onMenuClick}>
          <MoreVertical size={14} />
        </button>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {image && (
          <div className="card-image">
            <img src={image} alt={title} />
          </div>
        )}
        <div className="card-footer">
          <div className="card-stats">
            {attachments && (
              <div className="stat">
                <Paperclip className="stat-icon" />
                <span>{attachments}</span>
              </div>
            )}
            {comments && (
              <div className="stat">
                <MessageCircle className="stat-icon" />
                <span>{comments}</span>
              </div>
            )}
          </div>
          <div className="avatars">
            {avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt={`Avatar ${index}`}
                className="avatar"
                style={{ marginLeft: index > 0 ? "-6px" : "0" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const KanbanColumn = ({ title, cards, onAddCard }) => {
  return (
    <div className="kanban-column">
      <div className="column-header">
        <h3 className="column-title">{title}</h3>
        <span className="card-count">{cards.length}</span>
      </div>
      <div className="column-content">
        {cards.map((card, index) => (
          <Card
            key={index}
            category={card.category}
            title={card.title}
            attachments={card.attachments}
            comments={card.comments}
            avatars={card.avatars}
            categoryColor={card.categoryColor}
            image={card.image}
            onMenuClick={() => console.log(`Menu clicked for: ${card.title}`)}
          />
        ))}
        <button className="add-card-btn" onClick={onAddCard}>
          <Plus size={16} />
          Add New Item
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [columns, setColumns] = useState({
    inProgress: [
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
        category: "App",
        title: "Find new images for pages",
        attachments: 10,
        comments: 18,
        avatars: [
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=40&h=40&fit=crop&crop=face&facepad=2",
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=40&h=40&fit=crop&crop=face&facepad=2",
          "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=40&h=40&fit=crop&crop=face&facepad=2",
        ],
        categoryColor: "images",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
      },
      {
        category: "App",
        title: "Forms & Tables section",
        attachments: 1,
        comments: 4,
        avatars: [],
        categoryColor: "app",
      },
    ],
    inReview: [
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
        category: "iOS App",
        title: "Food delivery ios app",
        attachments: 2,
        avatars: [
          "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=40&h=40&fit=crop&crop=face&facepad=2",
          "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=40&h=40&fit=crop&crop=face&facepad=2",
        ],
        categoryColor: "ios",
        image:
          "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=200&fit=crop",
      },
    ],
    done: [
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
        category: "Design",
        title: "Design new landing page",
        attachments: 3,
        comments: 5,
        avatars: [
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=40&h=40&fit=crop&crop=face&facepad=2",
          "https://images.unsplash.com/photo-1521791136064-7b8c1f6e9a0f?w=40&h=40&fit=crop&crop=face&facepad=2",
        ],
        categoryColor: "design",
      },
    ],
  });

  const handleAddCard = (columnKey) => {
    console.log(`Add card to ${columnKey}`);
  };

  return (
    <div className="kanban-app">
      <div className="kanban-header">
        <h1>Project Tasks</h1>
        <p>Organize and track your project progress</p>
      </div>

      <div className="kanban-board">
        <KanbanColumn
          title="In Progress"
          cards={columns.inProgress}
          onAddCard={() => handleAddCard("inProgress")}
        />
        <KanbanColumn
          title="In Review"
          cards={columns.inReview}
          onAddCard={() => handleAddCard("inReview")}
        />
        <KanbanColumn
          title="Done"
          cards={columns.done}
          onAddCard={() => handleAddCard("done")}
        />
      </div>
    </div>
  );
};

export default App;
