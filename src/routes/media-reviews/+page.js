// @ts-nocheck
/** @type {import('./$types').PageLoad} */
export async function load() {
  const reviews = [
    {
      name: "Tazz",
      rating: 5,
      text: "Elsje has been fantastic with my son, she is patient and understanding and has helped him improve with a lot of things he was having issues with. She provides detailed feedback of all sessions and guidance for us to continue assisting him at home. I would definitely recommend Elsje to anyone who has a little one who needs extra help, love, care and guidance to overcome stepping stones while growing.",
    },
    {
      name: "Denise Harvey",
      rating: 5,
      text: "My daughter started with Elsje and has improved in leaps and bounds in the months we have been attending sessions. In also attending and participating, I am also able to help my daughter at home. We are so happy we chose Elsje and KidzCan.",
    },
    {
      name: "Ayanda Mpanza",
      rating: 5,
      text: "(A 5-star rating without comment was provided)",
    },
    {
      name: "Danashree Mc Allister",
      rating: 5,
      text: "Elsje is the best!!",
    },
    {
      name: "Minenhle Ndlovu",
      rating: 5,
      text: "What an amazing experience for my daughter and I. Absolutely enjoyed our sessions with OT Sharon. She is just amazing and very good with the kids. Thank you so much for the amazing work you have done for our daughter and the family!!!❤️",
    },
    {
      name: "Avril Edwards",
      rating: 5,
      text: "(A 5-star rating without comment was provided)",
    },
    {
      name: "Barbara Oelofse",
      rating: 5,
      text: "2 years ago, I knew that I needed help and took a chance to start OT with my daughter at 2 and a half years. Elsje is my lifeline, my village with whom I share all my concerns. I look to Elsje for a lot of answers, and she is always open to listen. OT has changed every aspect of my family’s day to day and I have gained the best relationship with my kids. Elsje is my go-to for everything regarding my kids! Thank you for being there for us.",
    },
    {
      name: "Zelda Snyders",
      rating: 5,
      text: "My little one has been with Elsje just over two years. I can truly say that Elsje listens to your concerns and addresses them with detail. I was very scared at first as I had no idea what an OT did or what sessions entailed, but after the first session with Elsje my fears were put to rest - knowing that she works with me, and takes my concerns seriously and attends to my little one with absolute care and professionalism. I get to learn with my little one as Elsje gives constant feedback regarding their sessions and what we can do from home to help her along.",
    },
    {
      name: "Evelyn Harry",
      rating: 5,
      text: "(A 5-star rating without comment was provided)",
    },
    {
      name: "Ntombenhle Mkhize",
      rating: 5,
      text: "We have been seeing Elsje for almost two years and she has been absolutely amazing with my now 4 year old. He has grown in leaps and bounds since starting OT. Her approach, the many fun tools, work space and thoughtfulness on difficult days is what sets her apart from a lot of providers. We highly recommend Elsje, she’s amazing with children and parents alike.",
    },
    {
      name: "Thabile Gcaba",
      rating: 5,
      text: "Elsje is excellent! She is so kind and very experienced. She taught our little boy and our family so much. She was the perfect foundation.",
    },
    {
      name: "Linda Nxumalo",
      rating: 5,
      text: "Thank you Elsje for the wonderful work. Your guidance, patience and interest shown to our child has helped us as his parents to understand and manage his situation better. Your school recommendations have also helped us place our child at a school where he is best understood and is progressing far more compared to where he was in the last couple of years. Our child is a happy boy, has self confidence and is doing much better in his academics and social behaviour. You are good at what you do and we are grateful for all you have done for our boy!",
    },
    {
      name: "Zamo Ntuli",
      rating: 5,
      text: "We have had the most fruitful journey with Elsje as our daughter's OT. She started when she was 10 years old and Elsje was a big part of her transitioning smoothly into her teens &amp; puberty. Elsje has a skill set that enables her to go beyond what you (as a parent) present, as challenges &amp; needs - which is so beneficial when you set goals for a child on the Autism Spectrum. Our daughter also has a severe Speech disorder that requires her to use AAC. Elsje was able to adapt sessions brilliantly, to include our 'Proloquo App' in order to synchronise her outcomes &amp; findings with our daughter's Speech Therapy Sessions. Today, our daughter is a self-regulated teenager who is confident to be in a school setting with other special-needs teens &amp; enjoy a full day's schooling environment! Highly recommend Elsje as an OT.",
    },
    {
      name: "Tamarin Goldblatt",
      rating: 5,
      text: "So grateful for the time we have had to be in sessions with Elsje. We had sessions over Zoom and it worked out very well for us. We are all very happy with my daughters progress and she is a lot more self-aware than before. I would highly recommend Elsje. My daughter really enjoyed connecting with Elsje.",
    },
    {
      name: "Alicia K",
      rating: 5,
      text: "What an amazing experience! This is probably the most organised practice I have ever had the pleasure of dealing with. Elsje did such a great job with my kids, her attitude was excellent and her advice spot on. She was professional and her wealth of knowledge is evident in the improvement of my children's school work in the short time that they saw her. Five stars is honestly an understatement.",
    },
    {
      name: "Kathy Morgan",
      rating: 5,
      text: "Elsje has worked with my daughter since she was three years old. One of the main outcomes was for me to be able to connect with my child on a real level. I will forever be grateful to Elsje for that. In my daughter's later years, Elsje has been able to assist Kate in goal setting, practical exercises and coping skills that a child can understand, implement and as a consequence benefit from. She has been incredible in coaching me as a mom alongside Kate's needs and recognising her strengths. Elsje was open to meeting teachers and therapists in order to share the findings and suggest areas for focus. Elsje shows initiative and real concern and care. My daughter thoroughly enjoys her sessions and I would travel as far as I needed to to get what Elsje provides as a Therapist.",
    },
    {
      name: "Melissa Horner",
      rating: 5,
      text: "I highly recommend Elsje Stuiver. She is professional and caring. My son adores her and finding a therapist who can connect so well with a child with autism is a truly special thing. In a year my son has flourished. She has helped him in too many ways to mention and at the same time has imparted her knowledge to help me to better understand his behaviours and given practical advice that I am able to use at home. My son actually cheers when he knows that he is going to O.T.",
    },
    {
      name: "Jessica Audouin",
      rating: 5,
      text: "Elsje Stuiver is exceptional. She has brought a shy and reserved little boy and made him a confident and chatty young man. She is passionate, caring and very professional and my son just adores her. She is dedicated to helping young children reach their full potential. Lessons with Elsje have really helped my son with his fine and gross motor skills and his overall core strength have improved tremendously.",
    },
    {
      name: "Vinay Maharaj",
      rating: 5,
      text: " Elsje has been amazing 2 my son Rehaan who through her therapy on a weekly basis has shown amazing results my wife n i would like to thank u Elsje for ur amazing support and been there for Rehaan and showing him and us a better way of life and helping him 2 achieve his potential thank you for been tolerant with Rehaan when he has his off days but before we leave ur room he is back 2 been all smiles and to Adri thank you for keeping us updated with our appointments payments and info we my wife n i would like 2 wish u an amazing festive season n look forward 2 seen u in 2019.",
    },
    {
      name: "Eric Prinsloo",
      rating: 5,
      text: "A great specialist in the autism field. Thank you for the attention to detail.",
    },
  ];

  return { reviews };
}
