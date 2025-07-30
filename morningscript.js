const greetingCards = [
    {
        id: "1",
        title: "Divine Hanuman Blessings",
        category: "Spiritual",
        // imageUrl: "https://images.unsplash.com/photo-1583848974440-803f7f83e838?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        imageUrl: "https://i.pinimg.com/736x/37/ba/30/37ba308974943e55a05650a309f9b2b6.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Hanuman", "Tuesday", "Strength", "Divine"],
        defaultText: "May Hanuman Ji bless you with strength and courage. Jai Bajrang Bali!"
    },
    {
        id: "2", 
        title: "Peaceful Good Morning",
        category: "Good Morning",
        imageUrl: "https://i.pinimg.com/736x/74/de/ef/74deefa53376c84105312f9481db0bf7.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Morning", "Sunrise", "Peace", "Blessing"],
        defaultText: "Good Morning! May your day be filled with sunshine, laughter, and positivity."
    },
    {
        id: "3",
        title: "Ganesha Festival Joy",
        category: "Festival",
        imageUrl: "https://i.pinimg.com/1200x/9b/ed/ad/9bedadac7f95a8a3d8f2c771634e7d81.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Ganesha", "Festival", "Celebration", "Joy"],
        defaultText: "Ganpati Bappa Morya! May Lord Ganesha remove all obstacles from your path."
    },
    {
        id: "4",
        title: "Janmashtami wish",
        category: "Festival",
        imageUrl: "https://cdn.wallpapersafari.com/59/31/MAlJLe.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Krishna", "Birthday", "Janmashtami", "Divine"],
        defaultText: "Happy Birthday! May Krishna's love and wisdom guide you always."
    },
    {
        id: "5",
        title: "Morning Blessing",
        category: "Good Morning", 
        imageUrl: "https://i.pinimg.com/736x/e6/d9/cf/e6d9cfdfdcadd7cabb887c28e7c52027.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Morning", "Blessing", "Spiritual"],
        defaultText: "Rise and shine with divine blessings. Good Morning!"
    },
    {
        id: "6",
        title: "Hanuman Power",
        category: "Spiritual",
        // imageUrl: "https://images.unsplash.com/photo-1583848974440-803f7f83e838?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        imageUrl: "https://img.freepik.com/premium-photo/black-white-illustration-hanuman-silhouette-hanuman-jayanti-celebration_1102-11799.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Hanuman", "Power", "Devotion"],
        defaultText: "May Bajrang Bali remove all obstacles from your path and fill your Tuesday with strength, courage, and devotion. Jai Hanuman!"
    },
    {
        id: "7",
        title: "Lord Shiva calm",
        category: "Spiritual",
        // imageUrl: "https://images.unsplash.com/photo-1583848974440-803f7f83e838?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        imageUrl: "https://i.pinimg.com/736x/06/2d/3d/062d3df7f17a98cb1ef4e79599fbc7e2.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Lord Shiva", "Power", "Wisdom"],
        defaultText: "Let the divine energy of Bholenath destroy all your worries and grant you eternal bliss. Om Namah Shivaya!"
    },
    {
        id: "8",
        title: "Durga Maa",
        category: "Spiritual",
        // imageUrl: "https://images.unsplash.com/photo-1583848974440-803f7f83e838?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        imageUrl: "https://i.pinimg.com/1200x/5c/0d/69/5c0d69e309b915068924b9d7338717ca.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Durga maa", "Power", "Courage","Wealth","Wisdom"],
        defaultText: "May Maa Durga bless you with inner strength, divine energy, and unwavering courage. Jai Mata Di!"
    },
    {
        id: "9",
        title: "Lakshmi Maa ",
        category: "Spiritual",
        // imageUrl: "https://images.unsplash.com/photo-1583848974440-803f7f83e838?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        imageUrl: "https://i.pinimg.com/736x/1a/e9/56/1ae956b1eb6a6ce17afe59b3cfd7ad9f.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Lakshmi maa", "Power", "Wealth","Courage","Wisdom"],
        defaultText: "Let the light of Lakshmi Maa enter your home and heart, filling your life with abundance and positivity."
    },
    {
        id: "10",
        title: "Morning Quote",
        category: "Good Morning", 
        imageUrl: "https://i.pinimg.com/736x/79/bf/6c/79bf6cf3ae5af6cd291cc7492d88d103.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Morning", "Blessing", "Nature"],
                defaultText: ""
    },
        {
        id: "11",
        title: "Happy Birhtday",
        category: "Birthday",
        imageUrl: "https://oyepaglu.com/wp-content/uploads/2022/04/happy-birthday-gif-funny-download.gif",
        isVideo: true,
        isFavorite: false,
        tags: ["Person", "Birthday", "Wish"],
                defaultText: ""
    },
        {
        id: "12",
        title: "Happy Birhtday",
        category: "Birthday",
        imageUrl: "https://roopvibes.com/wp-content/uploads/2024/05/Happy-Birthday-GIF-images.gif",
        isVideo: true,
        isFavorite: false,
        tags: ["Person", "Birthday", "Wish"],
                defaultText: ""
    },
        {
        id: "13",
        title: "Maha Shivratri",
        category: "Festival",
        // imageUrl: "https://images.unsplash.com/photo-1583848974440-803f7f83e838?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        imageUrl: "https://i.pinimg.com/736x/12/85/3f/12853fed21b05f3a1b2a4be755ca8438.jpg",
        isVideo: true,
        isFavorite: false,
        tags: ["Lord Shiva", "Power", "Wisdom"],
        defaultText: ""
    },
        {
        id: "14",
        title: "Hanuman Jayanti",
        category: "Festival",
        // imageUrl: "https://images.unsplash.com/photo-1583848974440-803f7f83e838?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        imageUrl: "https://i.pinimg.com/736x/03/91/1e/03911e2bdef86e969ae783cb89a7324a.jpg",
        isVideo: true,
        isFavorite: false,
        tags: ["Hanuman", "Power", "Confidence"],
        defaultText: ""
    },
        {
        id: "15",
        title: "Diwali card Gif",
        category: "Festival",
        imageUrl: "https://totalreporter.com/wp-content/uploads/2023/10/Diwali-GIF-Images-2023.gif",
        isVideo: true,
        isFavorite: false,
        tags: ["Happiness", "wealth", "Sweets"],
        defaultText: ""
    },
        {
        id: "16",
        title: "Diwali card",
        category: "Festival",
        imageUrl: "https://i.pinimg.com/736x/b6/9b/07/b69b07e91ee02bba096d75ed7cb2981b.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Happiness", "wealth", "Sweets"],
        defaultText: "Wishing you a Diwali filled with lights of joy, love, and endless blessings. Shubh Deepavali!"
    },
        {
        id: "17",
        title: "Diwali card",
        category: "Festival",
        imageUrl: "https://img.freepik.com/premium-vector/happy-diwali-festival-wishing-post-design-with-clean-dark-background-template_593190-95.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Happiness", "wealth", "Sweets"],
        defaultText: "May the divine light of Diwali remove all darkness from your life and fill it with happiness and prosperity. Happy Diwali!"


    },
        {
        id: "18",
        title: "Holi card",
        category: "Festival",
        imageUrl: "https://i.pinimg.com/736x/8e/36/0d/8e360d2c2ce8dab34fdfb059dc35e706.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Happiness", "colors", "Sweets"],
        defaultText: ""


    },
        {
        id: "19",
        title: "Holi card Gif",
        category: "Festival",
        imageUrl: "https://i.pinimg.com/originals/61/5d/29/615d294c7f7981542c9b00b8377c41cb.gif",
        isVideo: true,
        isFavorite: false,
        tags: ["Happiness", "colors", "Sweets"],
        defaultText: ""


    },
        {
        id: "20",
        title: "Holi card",
        category: "Festival",
        imageUrl: "https://i.pinimg.com/1200x/eb/99/25/eb9925e9e1c1fb4b8720b29e817e606b.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Happiness", "colors", "Sweets"],
        defaultText: "Let’s celebrate the festival of colors with a splash of love and laughter. Happy Holi to you and your family!"
    },
        {
        id: "21",
        title: "Holi card ",
        category: "Festival",
        imageUrl: "https://i.pinimg.com/736x/ef/09/35/ef093585ff092a9aa6cc969e3ddd5ea0.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Happiness", "colors", "Sweets"],
        defaultText: "May the colors of Holi spread the message of peace, friendship, and prosperity in your life. Rangon Bhari Holi Mubarak!"
    },
        {
        id: "22",
        title: "Independence Day card ",
        category: "Festival",
        imageUrl: "https://i.pinimg.com/736x/2e/e1/29/2ee1292f16a1405be88d5be21c1cac5c.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Proud", "Dignity", "Unity","Courage"],
        defaultText: "Let us salute the heroes who gave us freedom, and become the citizens who protect it. Happy Independence Day!"
    },
        {
        id: "23",
        title: "Independence Day card Gif ",
        category: "Festival",
        imageUrl: "https://totalreporter.com/wp-content/uploads/2023/08/Independence-Day-India-Flag-Gif.gif",
        isVideo: true,
        isFavorite: true,
        tags: ["Proud", "Dignity", "Unity","Courage"],
        defaultText: ""
    },
        {
        id: "24",
        title: "Independence  Day card Gif ",
        category: "Festival",
        imageUrl: "https://bestwishesfor.com/wp-content/uploads/2022/08/Independence-Day-Gif-Images.gif",
        isVideo: true,
        isFavorite: true,
        tags: ["Proud", "Dignity", "Unity","Courage"],
        defaultText: ""
    },
        {
        id: "25",
        title: "Independence Day card ",
        category: "Festival",
        imageUrl: "https://i.pinimg.com/1200x/8c/b2/64/8cb26467983a6bd94e5d44848181e56c.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Proud", "Dignity", "Unity","Courage"],
        defaultText: "May the tricolor always fly high in your heart, and may you always stand tall with pride. Jai Bharat!"
    },
        {
        id: "26",
        title: "Republic Day card ",
        category: "Festival",
        imageUrl: "https://i.pinimg.com/736x/a9/05/bd/a905bd59f4f79ab883f73740da30ead9.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Proud", "Dignity", "Unity","Courage"],
        defaultText: "May the tricolor always fly high in your heart, and may you always stand tall with pride. Jai Bharat!"
    },
        {
        id: "27",
        title: "Republic Day card ",
        category: "Festival",
        imageUrl: "https://i.pinimg.com/736x/8d/d3/45/8dd345d9419b10c428a6d7c8952bfe31.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Proud", "Dignity", "Unity","Courage"],
        defaultText: ""
    },
        {
        id: "28",
        title: "Republic Day card Gif ",
        category: "Festival",
        imageUrl: "https://c.tenor.com/Dfp1cuMAqxwAAAAd/republic-day-happy-republic-day.gif",
        isVideo: true,
        isFavorite: true,
        tags: ["Proud", "Dignity", "Unity","Courage"],
        defaultText: ""
    },
        {
        id: "29",
        title: "Motivational card ",
        category: "Motivational",
        imageUrl: "https://i.pinimg.com/736x/17/52/c9/1752c9684b8f9fa3e0d5c6e83a37d397.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Proud", "Dignity", "Motivation","Courage"],
        defaultText: "You don’t have to be perfect to start — you just have to start to become something greater."
    },
        {
        id: "30",
        title: "Motivational card ",
        category: "Motivational",
        imageUrl: "https://i.pinimg.com/736x/16/a4/ae/16a4ae227bc2b33fa1697d1eea340115.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Proud", "Dignity", "Motivation","Courage"],
        defaultText: ""
    },
        {
        id: "31",
        title: "Motivational card ",
        category: "Motivational",
        imageUrl: "https://i.pinimg.com/1200x/9d/4e/c7/9d4ec7b353fa6547a97f98c18188f511.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Proud", "Dignity", "Motivation","Courage"],
        defaultText: ""
    },
        {
        id: "32",
        title: "Motivational card Gif ",
        category: "Motivational",
        imageUrl: "https://media3.giphy.com/media/nqkYdRACwlr7R97xPP/giphy.gif",
        isVideo: true,
        isFavorite: true,
        tags: ["Proud", "Dignity", "Motivation","Courage"],
        defaultText: ""
    },
        {
        id: "33",
        title: "Motivational card Gif ",
        category: "Motivational",
        imageUrl: "https://i.gifer.com/origin/34/34d158fca101006cef587bf1d352295f_w200.gif",
        isVideo: true,
        isFavorite: true,
        tags: ["Proud", "Dignity", "Motivation","Courage"],
        defaultText: ""
    },
        {
        id: "34",
        title: "Relax and text card ",
        category: "Nature",
        imageUrl: "https://i.pinimg.com/736x/b5/6c/d2/b56cd20bf4f1bc58d5e24cb669cf69e6.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Nature", "Vibes", "calm","happiness"],
        defaultText: "Nature doesn’t hurry, yet everything is accomplished. Let your day flow just like that."
    },
        {
        id: "35",
        title: "Relax and text card ",
        category: "Nature",
        imageUrl: "https://i.pinimg.com/736x/64/6b/05/646b05c293cb4cc69c7a2554eeba61a4.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Nature", "Vibes", "calm","happiness"],
        defaultText: "Adopt the pace of nature: her secret is patience." 
    },
        {
        id: "36",
        title: "Relax and text card ",
        category: "Nature",
        imageUrl: "https://i.pinimg.com/1200x/e8/c3/17/e8c317142762dc0a70748bd9f3152265.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Nature", "Vibes", "calm","happiness"],
        defaultText: "Nature does not hurry, yet everything is accomplished." 
    },
        {
        id: "37",
        title: "Relax and text card Gif ",
        category: "Nature",
        imageUrl: "https://th.bing.com/th/id/R.e9494ea0420d42a48a0c6ba1f0082525?rik=V5iaevmiQOe5IA&riu=http%3a%2f%2fbestanimations.com%2fNature%2fnature-waterfall-animated-gif-4.gif&ehk=cBt%2btrbuLmk1lzN417Dq7LFt5OZthuwNR7KHoUpnx9M%3d&risl=&pid=ImgRaw&r=0",
        isVideo: false,
        isFavorite: true,
        tags: ["Nature", "Vibes", "calm","happiness"],
        defaultText: "To sit in the shade on a fine day and look upon verdure is the most perfect refreshment."
    },
        {
        id: "38",
        title: "Relax and text card Gif ",
        category: "Nature",
        imageUrl: "https://th.bing.com/th/id/R.2927a7d1d69029869e38c3f95609693d?rik=tPYjuSB%2fAtR15A&riu=http%3a%2f%2fbestanimations.com%2fNature%2fWater%2flake%2flake-nature-animated-gif-28.gif&ehk=zH8YJZ5mRLT4OHmWUAHBSGPd0aPMrYDawtBVlsBqYgw%3d&risl=&pid=ImgRaw&r=0",
        isVideo: false,
        isFavorite: true,
        tags: ["Nature", "Vibes", "calm","happiness"],
        defaultText: "To sit in the shade on a fine day and look upon verdure is the most perfect refreshment."
    },
        {
        id: "39",
        title: "Relax and text card Gif ",
        category: "Nature",
        imageUrl: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDc0OG1jbXVmd2owcWh2djQ2emhqN2U4ZHc3ZWM3bXl2OW55dmlhZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OK5LK5zLFfdm/giphy.gif",
        isVideo: false,
        isFavorite: false,
        tags: ["Nature", "Vibes", "calm","happiness"],
        defaultText: "Look deep into nature, and then you will understand everything better." 
    },
        {
        id: "40",
        title: "Motivational card ",
        category: "Motivational",
        imageUrl: "https://i.pinimg.com/736x/90/df/b2/90dfb273b1de75abac2c2a2e6d99926a.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Proud", "Dignity", "Motivation","Courage"],
        defaultText: "" 
    },
        {
        id: "41",
        title: "Motivational card ",
        category: "Motivational",
        imageUrl: "https://i.pinimg.com/736x/cb/26/7a/cb267a9fa023d1f46405ebd464451eb1.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Proud", "Dignity", "Motivation","Courage"],
        defaultText: "" 
    },
        {
        id: "42",
        title: "Motivational card ",
        category: "Motivational",
        imageUrl: "https://i.pinimg.com/originals/a4/27/18/a4271831b84c6904de6b333f5c3db9a4.gif",
        isVideo: true,
        isFavorite: false,
        tags: ["Proud", "Dignity", "Motivation","Courage"],
        defaultText: "" 
    },
            {
        id: "43",
        title: "Relax and text card Gif ",
        category: "Nature",
        imageUrl: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmMwMXZ2c210OGZicWF5ZzA3ZWJ5djd4aXhveDR5b25qdGZ1YXZnNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dU97uV3UyP0ly/giphy.gif",
        isVideo: true,
        isFavorite: false,
        tags: ["Nature", "Vibes", "calm","happiness"],
        defaultText: "The clearest way into the Universe is through a forest wilderness."  
    },
            {
        id: "44",
        title: "Raksha Bandhan card",
        category: "Festival",
        imageUrl: "https://i.pinimg.com/736x/c4/97/07/c497077cfc3a1d89c61df428a17c34d0.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Happiness", "colors", "Sweets"],
        defaultText: ""
    },
            {
        id: "45",
        title: "Raksha Bandhan card",
        category: "Festival",
        imageUrl: "https://i.pinimg.com/736x/f1/46/e2/f146e2787c8b506cd9d71f597d6fc63a.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Happiness", "colors", "Sweets"],
        defaultText: ""
    },
            {
        id: "46",
        title: "Raksha Bandhan card",
        category: "Festival",
        imageUrl: "https://i.pinimg.com/736x/0a/5f/60/0a5f603a95c2f4e45e9186a074e7c38d.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Happiness", "colors", "Sweets"],
        defaultText: ""
    },
        {
        id: "47",
        title: "Hanuman Power Gif",
        category: "Spiritual",
        imageUrl: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzJrZTRjMXd2dGU5ZmxnbW02aGsyeDBtZG85c3N1NWdyamNmbHJyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/45ZrnCfKO22AKmKS7l/giphy.gif",
        isVideo: false,
        isFavorite: false,
        tags: ["Hanuman", "Power", "Devotion"],
        defaultText: ""
    },
            {
        id: "48",
        title: "Hanuman Jayanti Gif",
        category: "Festival",
        imageUrl: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTd2eTg2ZDRiemd5azNrd3k3YXJ5MTNneGJzeDExczV4YjZrOXVqZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LPrrLVYFTFFn5ntdek/giphy.gif",
        isVideo: false,
        isFavorite: false,
        tags: ["Hanuman", "Power", "Confidence"],
        defaultText: ""
    },
            {
        id: "49",
        title: "Hanuman Jayanti Gif",
        category: "Festival",
        imageUrl: "https://media.tenor.com/8TRff8kIvnoAAAAC/happy-hanuman-jayanti-aap-ko-hanuman-jayanti-ki-shubhkamnaye.gif",
        isVideo: false,
        isFavorite: true,
        tags: ["Hanuman", "Power", "Confidence"],
        defaultText: ""
    },
            {
        id: "50",
        title: "Hanuman Jayanti card",
        category: "Festival",
        imageUrl: "https://i.pinimg.com/1200x/09/04/ee/0904ee8ef000697e504d56c3be619059.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Hanuman", "Power", "Confidence"],
        defaultText: ""
    },
            {
        id: "51",
        title: "Hanuman Jayanti card Text",
        category: "Festival",
        imageUrl: "https://i.pinimg.com/736x/dc/2d/db/dc2ddb22166fd4904a3ed0814fba9f30.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Hanuman", "Power", "Confidence"],
        defaultText: "राम दूत अतुलित बलधामा, अंजनि पुत्र पवनसुत नामा — हनुमान जयंती की मंगल शुभकामनाएँ!"
    },
        {
        id: "52",
        title: "Ganesha Festival card",
        category: "Festival",
        imageUrl: "https://i.pinimg.com/736x/3a/af/2d/3aaf2dc5b59ee489d4bd477ea8fc0a34.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Ganesha", "Festival", "Celebration", "Joy"],
        defaultText: ""
    },
        {
        id: "53",
        title: "Ganesha card",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/736x/87/20/7f/87207fc3c248023d8c1635409e14e68d.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Ganesha", "Intelligent", "Celebration", "Joy"],
        defaultText: ""
    },
        {
        id: "54",
        title: "Ganesha  card",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/736x/77/d2/51/77d251b91b9285b3ed4eabf25089e8af.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Ganesha", "Intelligent", "Celebration", "Joy"],
        defaultText: ""
    },
        {
        id: "54",
        title: "Ganesha chaturthi Text card",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/736x/5f/6a/8e/5f6a8ef0917ab4c5dc14d64e22a0b405.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Ganesha", "Festival", "Celebration", "Joy"],
        defaultText: "वक्रतुंड महाकाय, सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव, सर्वकार्येषु सर्वदा॥"
    },
        {
        id: "55",
        title: "Janmashtami wish Card",
        category: "Festival",
        imageUrl: "https://i.pinimg.com/736x/a9/e4/40/a9e440010e61803ce2c53d467f063921.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Krishna", "Birthday", "Janmashtami", "Divine"],
        defaultText: "मुरली मनोहर श्रीकृष्ण मुरारी,सदा करो भक्तों पर कृपा तुम्हारी। जन्माष्टमी की हार्दिक शुभकामनाएं!"
    },
        {
        id: "55",
        title: " Lord Krishna Card",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/736x/a4/7a/a2/a47aa2c89eef655d5583fc3a72963ca1.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Krishna", "Calm", "Divine", "Clever"],
        defaultText: ""
    },
        {
        id: "56",
        title: " Lord Krishna Card",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/736x/3c/da/28/3cda28685c2935cb471bb299ce1ad8de.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Krishna", "Calm", "Divine", "Clever"],
        defaultText: ""
    },
        {
        id: "57",
        title: " Lord Krishna Card",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/736x/81/57/09/81570903b5f22d0dcdca3c8e208e3f77.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Krishna", "Calm", "Divine", "Clever"],
        defaultText: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते संगोऽस्त्वकर्मणि॥"
    },
        {
        id: "58",
        title: " Lord Krishna Power Card",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/736x/10/41/04/104104852574d0e25d66e5db4e01e999.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Krishna", "Power", "Aggression", "Clever"],
        defaultText: "शत्रु को तब तक क्षमा दो, जब तक वह तुम्हारी विनम्रता को कमजोरी न समझे। पर जब वह सीमा लांघ जाए, तो युद्ध ही धर्म है।"
    },
        {
        id: "59",
        title: " Lord Krishna Power Card",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/736x/75/6a/ff/756aff55af9b283379683d0637f0b5a8.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Krishna", "Power", "Aggression", "Clever"],
        defaultText: "जब-जब धर्म की हानि होती है और अधर्म बढ़ता है, तब-तब मैं स्वयं अवतार लेता हूँ।"
    },
        {
        id: "60",
        title: " Lord Krishna Card",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/736x/7e/4c/cf/7e4ccf6399c43f98a0af6bbd39ca3ebb.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Krishna", "Power", "Aggression", "Clever"],
        defaultText: ""
    },
        {
        id: "61",
        title: "Lord Shiva calm",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/736x/74/20/bd/7420bd517137734aab72794af7e82c6d.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Lord Shiva", "Power", "Wisdom"],
        defaultText: ""
    },
        {
        id: "62",
        title: "Lord Shiva card",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/1200x/a9/ba/95/a9ba95b30a139fbba80b623278192f5e.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Lord Shiva", "Power", "Wisdom"],
        defaultText: ""
    },
        {
        id: "63",
        title: "Lord Shiva card",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/736x/d1/e3/b7/d1e3b7032eb7a99118fd33292b19d2f1.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Lord Shiva", "Power", "Wisdom"],
        defaultText: ""
    },
        {
        id: "64",
        title: "Lord Shiva card",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/736x/3f/c9/72/3fc972a0c5a2b90a4352a6f10a01dcba.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Lord Shiva", "Power", "Wisdom"],
        defaultText: "भोले के दर पर जो झुक जाता है, वो हर दुख से मुक्त हो जाता है।"
    },
        {
        id: "65",
        title: "Lord Shiva card",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/736x/0b/c4/0e/0bc40ebde0644a763d7392412b523e5e.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Lord Shiva", "Power", "Wisdom"],
        defaultText: "डर उसे लगता है जो जीवन से मोह रखता है, महाकाल के भक्त सिर्फ भस्म से खेलते हैं।"
    },
        {
        id: "66",
        title: "Lakshmi Maa ",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/736x/2a/c7/6b/2ac76be9da3544a5257a1f698df3c9b4.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Lakshmi maa", "Power", "Wealth","Courage","Wisdom"],
        defaultText: ""
    },
        {
        id: "67",
        title: "Lakshmi Maa ",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/736x/57/b5/45/57b54582692bb889113629a6e05d3812.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Lakshmi maa", "Power", "Wealth","Courage","Wisdom"],
        defaultText: ""
    },
        {
        id: "68",
        title: "Lakshmi Maa ",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/1200x/2c/68/6f/2c686fce144ad0785f2eaef78268a994.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Lakshmi maa", "Power", "Wealth","Courage","Wisdom"],
        defaultText: ""
    },
        {
        id: "69",
        title: "Lakshmi Maa ",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/736x/ef/64/ee/ef64ee1cd35d299ef92053e622fc1dee.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Lakshmi maa", "Power", "Wealth","Courage","Wisdom"],
        defaultText: ""
    },
        {
        id: "70",
        title: "Lakshmi Maa ",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/736x/9c/b3/e6/9cb3e60c28fd78ee2bdffd6ef013ffbe.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Lakshmi maa", "Power", "Wealth","Courage","Wisdom"],
        defaultText: ""
    },
        {
        id: "71",
        title: "Lakshmi Maa ",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/736x/60/4f/d9/604fd98f31aae6c1ad72a0c6437fc080.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Lakshmi maa", "Power", "Wealth","Courage","Wisdom"],
        defaultText: ""
    },
        {
        id: "72",
        title: "Lakshmi Maa ",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/736x/57/64/64/5764645d73ada77745d9d0ca5644e233.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Lakshmi maa", "Power", "Wealth","Courage","Wisdom"],
        defaultText: ""
    },
        {
        id: "73", 
        title: "Peaceful Good Morning",
        category: "Good Morning",
        imageUrl: "https://i.pinimg.com/736x/d6/b4/5c/d6b45c00801e64f36b9aa4651d285379.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Morning", "Sunrise", "Peace", "Blessing"],
        defaultText: ""
    },
        {
        id: "74", 
        title: "Peaceful Good Morning",
        category: "Good Morning",
        imageUrl: "https://i.pinimg.com/736x/47/40/01/47400196d5a53b3dc5489b7528dbcd2e.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Morning", "Sunrise", "Peace", "Blessing"],
        defaultText: "Rain outside. Tea in hand. Peace inside. Good Morning – Let your soul sip the calm. 🍵🌧️"
    },
        {
        id: "73", 
        title: "Peaceful Good Morning",
        category: "Good Morning",
        imageUrl: "https://i.pinimg.com/736x/61/91/cc/6191ccfe01b8372237313ab4194d0e41.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Morning", "Sunrise", "Peace", "Blessing"],
        defaultText: "Let the birds sing to your soul, Let the sunlight kiss your dreams awake... Good Morning, Nature Lover!"
    },
        {
        id: "74", 
        title: "Peaceful Good Morning",
        category: "Good Morning",
        imageUrl: "https://i.pinimg.com/736x/34/0a/4c/340a4c17f638159ed193f2703ba1e32c.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Morning", "Sunrise", "Peace", "Blessing"],
        defaultText: ""
    },
        {
        id: "75",
        title: "Durga Maa",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/1200x/f5/99/11/f59911f773cd6b8df4c6f3f0eb5eee1a.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Durga maa", "Power", "Courage","Wealth","Wisdom"],
        defaultText: ""
    },
        {
        id: "76",
        title: "Durga Maa",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/736x/2c/da/e6/2cdae6aa5cad41511c6f2c4475aabd9f.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Durga maa", "Power", "Courage","Wealth","Wisdom"],
        defaultText: ""
    },
        {
        id: "77",
        title: "Durga Maa",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/736x/f5/6b/c9/f56bc9943ff0b88d29e27113f21edaa4.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Durga maa", "Power", "Courage","Wealth","Wisdom"],
        defaultText: ""
    },
        {
        id: "78",
        title: "Durga Maa",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/736x/d3/1d/e7/d31de7ef9e6303579ac268cb43255063.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Durga maa", "Power", "Courage","Wealth","Wisdom"],
        defaultText: ""
    },
        {
        id: "79",
        title: "Durga Maa",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/736x/15/7b/62/157b62dbbc6c271b25919d3610566f79.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Durga maa", "Power", "Courage","Wealth","Wisdom"],
        defaultText: ""
    },
        {
        id: "80",
        title: "Durga Maa",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/1200x/c0/45/4d/c0454df959992b18041daf7d1cfa6063.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Durga maa", "Power", "Courage","Wealth","Wisdom"],
        defaultText: ""
    },
        {
        id: "81",
        title: "Anniversary Wish Card",
        category: "Anniversary",
        imageUrl: "https://i.pinimg.com/1200x/dd/cd/ca/ddcdca46ed8236b0e6ea66898538e83a.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Couple","Bonding","Respect","Support"],
        defaultText: ""
    },
        {
        id: "82",
        title: "Anniversary Wish Card",
        category: "Anniversary",
        imageUrl: "https://i.pinimg.com/736x/d1/03/91/d10391157db2ff183c9fa70ee1968f78.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Couple","Bonding","Respect","Support"],
        defaultText: ""
    },
        {
        id: "83",
        title: "Anniversary Wish Card",
        category: "Anniversary",
        imageUrl: "https://i.pinimg.com/736x/55/b9/e6/55b9e6284f2bf289c2f4888eee8deab3.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Couple","Bonding","Respect","Support"],
        defaultText: ""
    },
        {
        id: "84",
        title: "Anniversary Cake",
        category: "Anniversary",
        imageUrl: "https://i.pinimg.com/736x/dd/d5/6c/ddd56cd1336ca20ef0447e5094aa39df.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Couple","Bonding","Respect","Support"],
        defaultText: ""
    },
        {
        id: "84",
        title: "Anniversary wish card Text",
        category: "Anniversary",
        imageUrl: "https://i.pinimg.com/736x/4e/aa/9e/4eaa9e961ba3c47915d1f9e1a660ff47.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Couple","Bonding","Respect","Support"],
        defaultText: "Happy Anniversary to the couple who defines true love, laughter, and togetherness!"
    },
        {
        id: "85",
        title: "Anniversary wish card Text",
        category: "Anniversary",
        imageUrl: "https://i.pinimg.com/736x/21/d5/2a/21d52a4ecf1b7ab4a5c8cbaef77e2630.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Couple","Bonding","Respect","Support"],
        defaultText: "May your love continue to bloom like a perfect flower, no matter the weather of life. 🌸 Happy Anniversary!"
    },
        {
        id: "85",
        title: "Anniversary wish card",
        category: "Anniversary",
        imageUrl: "https://media.tenor.com/Ht-q2T1hwNoAAAAC/anniversary-wishes-happy-anniversary-wishes.gif",
        isVideo: false,
        isFavorite: false,
        tags: ["Couple","Bonding","Respect","Support"],
        defaultText: ""
    },
        {
        id: "85",
        title: "Birthday wish card",
        category: "Birthday",
        imageUrl: "https://i.pinimg.com/1200x/dd/78/f5/dd78f5cc6b2a6dff4c7f9abd38eafd04.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Happiness","Memories","Experience","Sweeets"],
        defaultText: ""
    },
        {
        id: "86",
        title: "Birthday wish card",
        category: "Birthday",
        imageUrl: "https://i.pinimg.com/736x/d0/65/fd/d065fdb6cc939e0c37effbcf3d0d5035.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Happiness","Memories","Experience","Sweeets"],
        defaultText: ""
    },
        {
        id: "87",
        title: "Birthday wish card",
        category: "Birthday",
        imageUrl: "https://i.pinimg.com/736x/41/fe/5c/41fe5cd8daee5e00c5a600f90abc869c.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Happiness","Memories","Experience","Sweeets"],
        defaultText: ""
    },
        {
        id: "88",
        title: "Birthday wish card Text",
        category: "Birthday",
        imageUrl: "https://i.pinimg.com/736x/e2/e2/a6/e2e2a6124f2757b72260e4b96eb4a9ce.jpg",
        isVideo: false,
        isFavorite: true,
        tags: ["Happiness","Memories","Experience","Sweeets"],
        defaultText: "Sending you smiles for every moment of your special day... Have a wonderful birthday!"
    },
            {
        id: "89",
        title: "Durga Maa",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/736x/09/1b/8f/091b8f5fbe53df0ff30263ce938cb621.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Durga maa", "Power", "Courage","Wealth","Wisdom"],
        defaultText: ""
    },
          {
        id: "90",
        title: "Lord Shiva card",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/736x/60/56/c7/6056c7e02b30b1ce3a21c55b5542c4c6.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Lord Shiva", "Power", "Wisdom"],
        defaultText: ""
    },
            {
        id: "91",
        title: "Ganesha  card",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/736x/f5/ce/47/f5ce47d1c42136e8d14ff7561f1e57c5.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Ganesha", "Intelligent", "Celebration", "Joy"],
        defaultText: ""
    },
            {
        id: "92",
        title: "Ganesha  card",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/1200x/fb/da/c5/fbdac518caeac8411756ff24ac9ac130.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Ganesha", "Intelligent", "Celebration", "Joy"],
        defaultText: ""
    },
            {
        id: "93",
        title: "Ganesha  card",
        category: "Spiritual",
        imageUrl: "https://i.pinimg.com/1200x/85/94/aa/8594aaaf9d5699ba6c838ec72a8802d9.jpg",
        isVideo: false,
        isFavorite: false,
        tags: ["Ganesha", "Intelligent", "Celebration", "Joy"],
        defaultText: ""
    },
];

// State management
let currentCategory = 'all';
let filteredCards = [...greetingCards];
let selectedCard = null;

// Spiritual days mapping
const spiritualDays = {
    0: { deity: "Lord Surya", color: "text-red-500", message: "Sunday - Honor the Sun God", icon: "☀️" },
    1: { deity: "Lord Shiva", color: "text-blue-500", message: "Monday - Meditate with Lord Shiva", icon: "🔱" },
    2: { deity: "Lord Hanuman", color: "text-orange-500", message: "Tuesday - Strength of Hanuman", icon: "🐒" },
    3: { deity: "Lord Ganesha", color: "text-yellow-500", message: "Wednesday - Wisdom of Ganesha", icon: "🐘" },
    4: { deity: "Lord Vishnu", color: "text-purple-500", message: "Thursday - Blessings of Vishnu", icon: "🙏" },
    5: { deity: "Lakshmi Maa", color: "text-pink-500", message: "Friday - Prosperity with Lakshmi", icon: "🪷" },
    6: { deity: "Shani Maa", color: "text-gray-700", message: "Saturday - Discipline of Shani", icon: "⚖️" },
};

// DOM Elements
const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('.category-badge');
const deityButtons = document.querySelectorAll('.deity-badge');
const tabButtons = document.querySelectorAll('.tab-btn');
const cardsGrid = document.getElementById('cardsGrid');
const cardsTitle = document.getElementById('cardsTitle');
const cardsCount = document.getElementById('cardsCount');
const emptyState = document.getElementById('emptyState');
const customizerModal = document.getElementById('customizerModal');
const modalClose = document.getElementById('modalClose');

// Customizer elements
const messageInput = document.getElementById('messageInput');
const nameInput = document.getElementById('nameInput');
const fontSizeSlider = document.getElementById('fontSizeSlider');
const fontSizeValue = document.getElementById('fontSizeValue');
const colorPresets = document.querySelectorAll('.color-preset');
const colorPicker = document.getElementById('colorPicker');
const fontButtons = document.querySelectorAll('.font-btn');
const tabTriggers = document.querySelectorAll('.tab-trigger');
const tabContents = document.querySelectorAll('.tab-content');
const previewText = document.getElementById('previewText');
const previewName = document.getElementById('previewName');
const previewImage = document.getElementById('previewImage');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Set up daily highlight
    setupDailyHighlight();
    
    // Render initial cards
    renderCards();
    
    // Set up event listeners
    setupEventListeners();
});

// Setup daily highlight based on current day
function setupDailyHighlight() {
    const today = new Date();
    const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
    const date = today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const dayOfWeek = today.getDay();
    
    const todaysSpirit = spiritualDays[dayOfWeek];
    
    // Update daily date
    document.getElementById('currentDate').textContent = `${dayName}, ${date}`;
    
    // Update daily badge
    document.getElementById('dailyBadge').textContent = `${todaysSpirit.deity} Day`;
    
    // Update daily deity message
    document.getElementById('dailyDeity').textContent = todaysSpirit.message;
    
    // Update mini card
    document.getElementById('miniCardTitle').textContent = todaysSpirit.deity;
}

// Setup all event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Category filtering
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => handleCategoryChange(button));
    });
    
    deityButtons.forEach(button => {
        button.addEventListener('click', () => handleCategoryChange(button));
    });
    
    // Card type tabs
    tabButtons.forEach(button => {
        button.addEventListener('click', () => handleTabChange(button));
    });
    
    // Modal controls
    modalClose.addEventListener('click', closeCustomizer);
    customizerModal.addEventListener('click', (e) => {
        if (e.target === customizerModal) closeCustomizer();
    });
    
    // Customizer controls
    if (messageInput) messageInput.addEventListener('input', updatePreview);
    if (nameInput) nameInput.addEventListener('input', updatePreview);
    if (fontSizeSlider) {
        fontSizeSlider.addEventListener('input', (e) => {
            fontSizeValue.textContent = e.target.value;
            updatePreview();
        });
    }
    
    // Color controls
    colorPresets.forEach(preset => {
        preset.addEventListener('click', () => {
            colorPresets.forEach(p => p.classList.remove('active'));
            preset.classList.add('active');
            const color = preset.dataset.color;
            colorPicker.value = color;
            updatePreview();
        });
    });
    
    if (colorPicker) {
        colorPicker.addEventListener('change', () => {
            colorPresets.forEach(p => p.classList.remove('active'));
            updatePreview();
        });
    }
    
    // Font controls
    fontButtons.forEach(button => {
        button.addEventListener('click', () => {
            fontButtons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');
            updatePreview();
        });
    });
    
    // Tab controls
    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const tabName = trigger.dataset.tab;
            switchTab(tabName);
        });
    });
    
    // Upload area
    const uploadArea = document.querySelector('.upload-area');
    const imageUpload = document.getElementById('imageUpload');
    
    if (uploadArea && imageUpload) {
        uploadArea.addEventListener('click', () => imageUpload.click());
        imageUpload.addEventListener('change', handleImageUpload);
    }
}

// Handle search functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    filteredCards = greetingCards.filter(card => 
        card.title.toLowerCase().includes(searchTerm) ||
        card.category.toLowerCase().includes(searchTerm) ||
        card.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    
    // Apply category filter if not 'all'
    if (currentCategory !== 'all') {
        filteredCards = filteredCards.filter(card => 
            card.category.toLowerCase() === currentCategory.replace('-', ' ') ||
            card.tags.some(tag => tag.toLowerCase().includes(currentCategory))
        );
    }
    
    renderCards();
}

// Handle category change
function handleCategoryChange(button) {
    // Remove active class from all category buttons
    document.querySelectorAll('.category-badge').forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    button.classList.add('active');
    
    // Update current category
    currentCategory = button.dataset.category;
    
    // Filter cards
    if (currentCategory === 'all') {
        filteredCards = [...greetingCards];
    } else {
        filteredCards = greetingCards.filter(card => 
            card.category.toLowerCase() === currentCategory.replace('-', ' ') ||
            card.tags.some(tag => tag.toLowerCase().includes(currentCategory))
        );
    }
    
    // Apply search filter if there's a search term
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filteredCards = filteredCards.filter(card => 
            card.title.toLowerCase().includes(searchTerm) ||
            card.category.toLowerCase().includes(searchTerm) ||
            card.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }
    
    // Update title and render
    updateCardsTitle();
    renderCards();
}

// Handle tab change for card types
function handleTabChange(button) {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    const cardType = button.dataset.type;
    
    // Filter cards based on type
    if (cardType === 'video') {
        filteredCards = filteredCards.filter(card => card.isVideo);
    } else if (cardType === 'image') {
        filteredCards = filteredCards.filter(card => !card.isVideo);
    }
    // 'festival' type would need additional logic
    
    renderCards();
}

// Update cards section title
function updateCardsTitle() {
    const title = currentCategory === 'all' 
        ? 'All Greeting Cards' 
        : `${currentCategory.replace('-', ' ')} Cards`;
    
    cardsTitle.textContent = title.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

// Render cards in the grid
function renderCards() {
    // Update cards count
    cardsCount.textContent = `${filteredCards.length} cards available`;
    
    // Show/hide empty state
    if (filteredCards.length === 0) {
        cardsGrid.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    } else {
        cardsGrid.style.display = 'grid';
        emptyState.style.display = 'none';
    }
    
    // Clear existing cards
    cardsGrid.innerHTML = '';
    
    // Render each card
    filteredCards.forEach(card => {
        const cardElement = createCardElement(card);
        cardsGrid.appendChild(cardElement);
    });
    
    // Reinitialize Lucide icons for new elements
    lucide.createIcons();
}

// Create a single card element
function createCardElement(card) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'greeting-card';
    cardDiv.addEventListener('click', () => openCustomizer(card));
    
    cardDiv.innerHTML = `
        <div class="card-image-container">
            <img src="${card.imageUrl}" alt="${card.title}" class="card-image">
            <div class="image-overlay"></div>
            
            ${card.isVideo ? `
                <div class="play-button">
                    <i data-lucide="play"></i>
                </div>
            ` : ''}
            
            <div class="card-badge">${card.category}</div>
            
            <button class="favorite-btn ${card.isFavorite ? 'active' : ''}" onclick="toggleFavorite('${card.id}', event)">
                <i data-lucide="heart" ${card.isFavorite ? 'fill="currentColor"' : ''}></i>
            </button>
        </div>
        
        <div class="card-content">
            <h3 class="card-title">${card.title}</h3>
            
            <div class="card-tags">
                ${card.tags.slice(0, 3).map(tag => `<span class="tag-badge">${tag}</span>`).join('')}
                ${card.tags.length > 3 ? `<span class="tag-badge">+${card.tags.length - 3}</span>` : ''}
            </div>
            
            <div class="card-actions">
                <div class="action-buttons">
                    <button class="action-btn" onclick="editCard('${card.id}', event)">
                        <i data-lucide="edit"></i>
                    </button>
                    <button class="action-btn" onclick="downloadCard('${card.id}', event)">
                        <i data-lucide="download"></i>
                    </button>
                    <button class="action-btn" onclick="shareCard('${card.id}', event)">
                        <i data-lucide="share-2"></i>
                    </button>
                </div>
                
                <button class="customize-btn" onclick="openCustomizer(findCardById('${card.id}'), event)">
                    Customize
                </button>
            </div>
        </div>
    `;
    
    return cardDiv;
}

// Find card by ID
function findCardById(id) {
    return greetingCards.find(card => card.id === id);
}

// Toggle favorite status
function toggleFavorite(id, event) {
    event.stopPropagation();
    const card = findCardById(id);
    if (card) {
        card.isFavorite = !card.isFavorite;
        renderCards();
    }
}

// Card action handlers
function editCard(id, event) {
    event.stopPropagation();
    const card = findCardById(id);
    if (card) {
        openCustomizer(card);
    }
}

function downloadCard(id, event) {
    event.stopPropagation();
    // Implement download functionality
    console.log('Download card:', id);
    showToast('Card download started!');
}

function shareCard(id, event) {
    event.stopPropagation();
    // Implement share functionality
    if (navigator.share) {
        navigator.share({
            title: 'Divine Greeting Card',
            text: 'Check out this beautiful greeting card!',
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            showToast('Link copied to clipboard!');
        });
    }
}

// Open customizer modal
function openCustomizer(card, event) {
    if (event) event.stopPropagation();
    
    selectedCard = card;
    
    // Update modal with card data
    if (messageInput) messageInput.value = card.defaultText;
    if (previewImage) previewImage.src = card.imageUrl;
    
    // Reset customizer state
    if (nameInput) nameInput.value = '';
    if (fontSizeSlider) {
        fontSizeSlider.value = 24;
        fontSizeValue.textContent = '24';
    }
    
    // Reset color to white
    colorPresets.forEach(p => p.classList.remove('active'));
    colorPresets[0].classList.add('active'); // White preset
    if (colorPicker) colorPicker.value = '#ffffff';
    
    // Reset font to serif
    fontButtons.forEach(b => b.classList.remove('active'));
    fontButtons[0].classList.add('active');
    
    // Update preview
    updatePreview();
    
    // Show modal
    customizerModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close customizer modal
function closeCustomizer() {
    customizerModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    selectedCard = null;
}

// Update preview in real-time
function updatePreview() {
    if (!selectedCard) return;
    
    const message = messageInput ? messageInput.value : selectedCard.defaultText;
    const name = nameInput ? nameInput.value : '';
    const fontSize = fontSizeSlider ? fontSizeSlider.value : 24;
    const color = colorPicker ? colorPicker.value : '#FFFFFF';
    const font = document.querySelector('.font-btn.active')?.dataset.font || 'serif';
    
    // Update preview text
    if (previewText) {
        previewText.textContent = message;
        previewText.style.fontSize = `${fontSize}px`;
        previewText.style.color = color;
        
        // Apply font family
        if (font === 'serif') {
            previewText.style.fontFamily = '"Playfair Display", serif';
        } else if (font === 'sans') {
            previewText.style.fontFamily = '"Inter", sans-serif';
        } else {
            previewText.style.fontFamily = 'monospace';
        }
    }
    
    // Update preview name
    if (previewName) {
        if (name) {
            previewName.textContent = `- ${name}`;
            previewName.style.display = 'block';
            previewName.style.fontSize = `${fontSize * 0.7}px`;
            previewName.style.color = color;
            previewName.style.fontFamily = previewText.style.fontFamily;
        } else {
            previewName.style.display = 'none';
        }
    }
}

// Switch tabs in customizer
function switchTab(tabName) {
    // Update tab triggers
    tabTriggers.forEach(trigger => {
        trigger.classList.toggle('active', trigger.dataset.tab === tabName);
    });
    
    // Update tab contents
    tabContents.forEach(content => {
        content.classList.toggle('active', content.dataset.tab === tabName);
    });
}

// Handle image upload
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Here you would typically upload the image to a server
            // For demo purposes, we'll just show a toast
            showToast('Image uploaded successfully!');
        };
        reader.readAsDataURL(file);
    }
}

// Show toast notification
function showToast(message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary);
        color: var(--primary-foreground);
        padding: 12px 24px;
        border-radius: var(--radius);
        box-shadow: var(--shadow-divine);
        z-index: 1001;
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Header button handlers
document.getElementById('filterBtn')?.addEventListener('click', () => {
    showToast('Filter options coming soon!');
});

document.getElementById('todayBtn')?.addEventListener('click', () => {
    // Scroll to daily highlight
    document.querySelector('.daily-highlight').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

document.getElementById('createBtn')?.addEventListener('click', () => {
    showToast('Create new card feature coming soon!');
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Close modal with Escape key
    if (e.key === 'Escape' && customizerModal.classList.contains('active')) {
        closeCustomizer();
    }
    
    // Focus search with Ctrl/Cmd + K
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
});

// Add some interactive animations
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.greeting-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
        } else {
            card.style.transform = '';
        }
    });
});

// Initialize floating animation for certain elements
function initFloatingAnimations() {
    const floatingElements = document.querySelectorAll('.daily-card, .logo-icon');
    floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.5}s`;
        element.classList.add('float-animation');
    });
}

// Initialize animations after DOM load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initFloatingAnimations, 1000);
});
