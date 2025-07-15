import React, { useState, useRef, useEffect } from "react";
import { Paperclip, MessageCircle, Plus, MoreVertical } from "lucide-react";
import "./App.css";

const CardMenu = ({ onDelete, onDuplicate }) => {
  return (
    <div className="card-menu">
      <button className="menu-item" onClick={onDuplicate}>
        Duplicate
      </button>
      <button className="menu-item delete" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

const Card = ({
  id,
  category,
  title,
  attachments,
  comments,
  avatars,
  categoryColor,
  image,
  onDragStart,
  onDelete,
  onDuplicate,
  onClick,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const dotsRef = useRef(null);

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      if (dotsRef.current && !dotsRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDuplicate = (e) => {
    e.stopPropagation();
    onDuplicate();
    setShowMenu(false);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete();
    setShowMenu(false);
  };

  return (
    <div className="card" draggable onDragStart={onDragStart}>
      <div className="card-header">
        <span className={`category-tag ${categoryColor}`}>{category}</span>
        <div className="menu-container">
          <button className="menu-dots" onClick={handleMenuClick} ref={dotsRef}>
            <MoreVertical size={14} />
          </button>
          {showMenu && (
            <div ref={menuRef}>
              <CardMenu onDuplicate={handleDuplicate} onDelete={handleDelete} />
            </div>
          )}
        </div>
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

const KanbanColumn = ({
  title,
  cards,
  onAddCard,
  columnId,
  onDragOver,
  onDrop,
  children,
}) => {
  return (
    <div
      className="kanban-column"
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, columnId)}
    >
      <div className="column-header">
        <h3 className="column-title">{title}</h3>
        <span className="card-count">{cards.length}</span>
      </div>
      <div className="column-content">
        {children}
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
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
    testing: [
      {
        id: 8,
        category: "App",
        title: "Test new features",
        attachments: 5,
        comments: 10,
        avatars: [
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=40&h=40&fit=crop&crop=face&facepad=2",
          "https://images.unsplash.com/photo-1521791136064-7b8c1f6e9a0f?w=40&h=40&fit=crop&crop=face&facepad=2",
        ],
        categoryColor: "app",
      },
    ],
    live: [
      {
        id: 9,
        category: "design",
        title: "Deploy to production",
        attachments: 1,
        comments: 2,
        avatars: [
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=40&h=40&fit=crop&crop=face&facepad=2",
          "https://images.unsplash.com/photo-1521791136064-7b8c1f6e9a0f?w=40&h=40&fit=crop&crop=face&facepad=2",
        ],
        categoryColor: "design",
      },
    ],
  });

  const [draggedCard, setDraggedCard] = useState(null);

  const handleDragStart = (e, card, columnId) => {
    setDraggedCard({ ...card, sourceColumn: columnId });
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e, targetColumnId) => {
    e.preventDefault();
    if (!draggedCard || draggedCard.sourceColumn === targetColumnId) return;

    setColumns((prevColumns) => {
      const sourceColumn = [...prevColumns[draggedCard.sourceColumn]];
      const cardIndex = sourceColumn.findIndex(
        (card) => card.id === draggedCard.id
      );
      if (cardIndex === -1) return prevColumns;

      const [movedCard] = sourceColumn.splice(cardIndex, 1);
      const targetColumn = [...prevColumns[targetColumnId]];
      targetColumn.push(movedCard);

      return {
        ...prevColumns,
        [draggedCard.sourceColumn]: sourceColumn,
        [targetColumnId]: targetColumn,
      };
    });

    setDraggedCard(null);
  };

  const handleDeleteCard = (cardId, columnId) => {
    setColumns((prevColumns) => ({
      ...prevColumns,
      [columnId]: prevColumns[columnId].filter((card) => card.id !== cardId),
    }));
  };

  const handleDuplicateCard = (cardId, columnId) => {
    setColumns((prevColumns) => {
      const columnCards = [...prevColumns[columnId]];
      const cardToDuplicate = columnCards.find((card) => card.id === cardId);

      if (!cardToDuplicate) return prevColumns;

      const newCard = {
        ...cardToDuplicate,
        id: Date.now(),
        title: `${cardToDuplicate.title} (Copy)`,
      };

      return {
        ...prevColumns,
        [columnId]: [...columnCards, newCard],
      };
    });
  };

  const handleAddCard = (columnKey) => {
    console.log(`Add card to ${columnKey}`);
  };

  const formatColumnTitle = (key) => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  };

  return (
    <div className="kanban-app">
      <div className="kanban-header">
        <h1>Project Tasks</h1>
        <p>Organize and track your project progress</p>
      </div>

      <div className="kanban-board">
        {Object.entries(columns).map(([columnId, cards]) => (
          <KanbanColumn
            key={columnId}
            title={formatColumnTitle(columnId)}
            cards={cards}
            columnId={columnId}
            onAddCard={() => handleAddCard(columnId)}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {cards.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                category={card.category}
                title={card.title}
                attachments={card.attachments}
                comments={card.comments}
                avatars={card.avatars}
                categoryColor={card.categoryColor}
                image={card.image}
                onDragStart={(e) => handleDragStart(e, card, columnId)}
                onDelete={() => handleDeleteCard(card.id, columnId)}
                onDuplicate={() => handleDuplicateCard(card.id, columnId)}
              />
            ))}
          </KanbanColumn>
        ))}
      </div>
    </div>
  );
};

export default App;
