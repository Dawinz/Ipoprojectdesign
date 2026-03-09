import { useState } from 'react';
import { MessageCircle, Send, ArrowLeft } from 'lucide-react';
import { messages, agents, properties } from '../data/mockData';

export function MessagesTab() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState('');

  const activeChat = messages.find((m) => m.id === selectedChat);
  const agent = activeChat ? agents.find((a) => a.id === activeChat.agentId) : null;
  const property = activeChat ? properties.find((p) => p.id === activeChat.propertyId) : null;

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // In a real app, this would send the message
      setMessageInput('');
    }
  };

  if (selectedChat && activeChat && agent && property) {
    return (
      <div className="min-h-screen flex flex-col">
        {/* Chat Header */}
        <div className="bg-white px-6 pt-12 pb-4 border-b border-gray-200">
          <button
            onClick={() => setSelectedChat(null)}
            className="flex items-center gap-2 text-gray-600 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>

          <div className="flex items-center gap-3 mb-3">
            <img
              src={agent.photo}
              alt={agent.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h2 className="text-lg text-gray-900">{agent.name}</h2>
              <p className="text-sm text-gray-600">{agent.agency}</p>
            </div>
          </div>

          {/* Property Reference */}
          <div className="bg-[#F6F8FB] rounded-xl p-3 flex gap-3">
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900 truncate">{property.title}</p>
              <p className="text-sm text-[#FFB020]">
                TZS {property.price.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {activeChat.messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[75%] px-4 py-3 rounded-2xl ${
                  msg.isUser
                    ? 'bg-gradient-to-r from-[#6BCB77] to-[#2F6BFF] text-white'
                    : 'bg-white text-gray-900'
                }`}
              >
                <p>{msg.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    msg.isUser ? 'text-white/70' : 'text-gray-500'
                  }`}
                >
                  {new Date(msg.timestamp).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="bg-white border-t border-gray-200 px-6 py-4">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-4 py-3 bg-[#F6F8FB] rounded-xl outline-none"
            />
            <button
              onClick={handleSendMessage}
              className="bg-gradient-to-r from-[#6BCB77] to-[#2F6BFF] text-white p-3 rounded-xl"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-4 border-b border-gray-200">
        <h1 className="text-2xl text-gray-900">Messages</h1>
        <p className="text-gray-600 mt-1">
          {messages.length} {messages.length === 1 ? 'conversation' : 'conversations'}
        </p>
      </div>

      {/* Conversations List */}
      <div className="px-6 py-4">
        {messages.length > 0 ? (
          <div className="space-y-3">
            {messages.map((message) => {
              const agent = agents.find((a) => a.id === message.agentId);
              const property = properties.find((p) => p.id === message.propertyId);
              const lastMessage = message.messages[message.messages.length - 1];

              if (!agent || !property) return null;

              return (
                <div
                  key={message.id}
                  onClick={() => setSelectedChat(message.id)}
                  className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <img
                      src={agent.photo}
                      alt={agent.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="text-base text-gray-900">{agent.name}</h3>
                        <span className="text-xs text-gray-500">
                          {new Date(lastMessage.timestamp).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2 truncate">
                        {lastMessage.text}
                      </p>
                      <p className="text-xs text-gray-500 truncate">{property.title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl text-gray-900 mb-2">No messages yet</h3>
            <p className="text-gray-600">
              Start a conversation with an agent about a property
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
