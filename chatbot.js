// Chatbot Logic for Stayora

class StayoraBot {
    constructor() {
        this.conversationState = 'initial';
        this.userPreferences = {};
        this.messagesContainer = document.getElementById('chatMessages');
        this.inputField = document.getElementById('chatInput');
        this.sendButton = document.getElementById('chatSend');

        this.init();
    }

    init() {
        // Welcome message
        this.addBotMessage("👋 Hi! I'm your Stayora Assistant. I'll help you find the perfect property!");
        this.addBotMessage("What are you looking for today?", [
            "Buy a flat",
            "Rent a flat",
            "Find a PG",
            "Rent an office"
        ]);

        // Event listeners
        if (this.sendButton) {
            this.sendButton.addEventListener('click', () => this.handleUserInput());
        }
        if (this.inputField) {
            this.inputField.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.handleUserInput();
            });
        }
    }

    handleUserInput() {
        const message = this.inputField.value.trim();
        if (!message) return;

        this.addUserMessage(message);
        this.inputField.value = '';

        // Process message
        setTimeout(() => {
            this.processMessage(message);
        }, 500);
    }

    processMessage(message) {
        const lowerMessage = message.toLowerCase();

        // Intent detection
        if (this.conversationState === 'initial') {
            if (lowerMessage.includes('buy')) {
                this.conversationState = 'buying';
                this.userPreferences.transactionType = 'buy';
                this.addBotMessage("Great! What's your budget for buying?", [
                    "Under ₹30 Lakh",
                    "₹30-50 Lakh",
                    "₹50 Lakh - 1 Cr",
                    "Above ₹1 Cr"
                ]);
            } else if (lowerMessage.includes('rent')) {
                this.conversationState = 'renting';
                this.userPreferences.transactionType = 'rent';
                this.addBotMessage("Perfect! What's your monthly budget?", [
                    "Under ₹15,000",
                    "₹15,000 - ₹30,000",
                    "₹30,000 - ₹50,000",
                    "Above ₹50,000"
                ]);
            } else if (lowerMessage.includes('pg')) {
                this.conversationState = 'pg';
                this.userPreferences.type = 'pg';
                this.addBotMessage("Looking for PG accommodation! What's your budget per month?", [
                    "Under ₹8,000",
                    "₹8,000 - ₹15,000",
                    "Above ₹15,000"
                ]);
            } else {
                this.addBotMessage("I can help you with buying, renting, or finding PG. Which one interests you?");
            }
        } else if (this.conversationState === 'buying' || this.conversationState === 'renting') {
            if (!this.userPreferences.budget) {
                this.userPreferences.budget = message;
                this.conversationState = 'city_select';
                this.addBotMessage("Which city are you looking in?", [
                    "Bangalore",
                    "Delhi",
                    "Mumbai",
                    "Noida",
                    "Gurgaon"
                ]);
            } else if (this.conversationState === 'city_select') {
                this.userPreferences.city = message;
                this.conversationState = 'bhk_select';
                this.addBotMessage("How many bedrooms do you need?", [
                    "1 BHK",
                    "2 BHK",
                    "3 BHK",
                    "4+ BHK"
                ]);
            } else if (this.conversationState === 'bhk_select') {
                this.userPreferences.bhk = message;
                this.conversationState = 'showing_results';
                this.showRecommendations();
            }
        } else if (this.conversationState === 'pg') {
            if (!this.userPreferences.budget) {
                this.userPreferences.budget = message;
                this.conversationState = 'city_select_pg';
                this.addBotMessage("Which city?", [
                    "Bangalore",
                    "Delhi",
                    "Noida"
                ]);
            } else if (this.conversationState === 'city_select_pg') {
                this.userPreferences.city = message;
                this.conversationState = 'showing_results';
                this.showRecommendations();
            }
        } else {
            this.addBotMessage("Would you like to search for something else?", [
                "Yes, new search",
                "No, thank you"
            ]);
        }
    }

    showRecommendations() {
        this.addBotMessage(`Perfect! Based on your preferences:`);
        this.addBotMessage(`
            📍 City: ${this.userPreferences.city || 'Any'}
            💰 Budget: ${this.userPreferences.budget || 'Flexible'}
            ${this.userPreferences.bhk ? `🏠 BHK: ${this.userPreferences.bhk}` : ''}
        `);

        setTimeout(() => {
            this.addBotMessage("I found 3 properties matching your requirements! 🎉");
            this.addBotMessage("You can view them on the main page. Would you like me to take you there?", [
                "Yes, show properties",
                "Refine search"
            ]);
        }, 800);
    }

    addBotMessage(text, chips = null) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message bot';
        messageDiv.textContent = text;
        this.messagesContainer.appendChild(messageDiv);

        if (chips && chips.length > 0) {
            const chipsDiv = document.createElement('div');
            chipsDiv.className = 'quick-chips';
            chips.forEach(chipText => {
                const chip = document.createElement('button');
                chip.className = 'chip';
                chip.textContent = chipText;
                chip.addEventListener('click', () => {
                    this.handleChipClick(chipText);
                });
                chipsDiv.appendChild(chip);
            });
            this.messagesContainer.appendChild(chipsDiv);
        }

        this.scrollToBottom();
    }

    addUserMessage(text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user';
        messageDiv.textContent = text;
        this.messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
    }

    handleChipClick(chipText) {
        this.addUserMessage(chipText);
        setTimeout(() => {
            this.processMessage(chipText);
        }, 500);
    }

    scrollToBottom() {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
}

// Initialize chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const chatbotButton = document.getElementById('chatbotButton');
    const chatbotContainer = document.getElementById('chatbotContainer');
    const chatbotClose = document.getElementById('chatbotClose');

    if (chatbotButton && chatbotContainer) {
        let bot = null;

        chatbotButton.addEventListener('click', () => {
            chatbotContainer.classList.toggle('active');
            if (chatbotContainer.classList.contains('active') && !bot) {
                bot = new StayoraBot();
            }
        });

        if (chatbotClose) {
            chatbotClose.addEventListener('click', () => {
                chatbotContainer.classList.remove('active');
            });
        }
    }
});
