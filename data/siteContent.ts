import type { Category } from '@/components/CategoryCard';
import type { FAQ } from '@/components/FAQAccordion';

export const giftingCategories: Category[] = [
  { title: 'Newborn Baby Gifts', icon: '👶', description: 'Soft, useful, and thoughtful newborn baby gifts for welcoming a little one with comfort and love.' },
  { title: 'Baby Shower Gifts', icon: '🎀', description: 'Memorable baby shower gifts that feel beautiful, practical, and parent-approved.' },
  { title: 'First Birthday Gifts', icon: '🎂', description: 'Cute baby gifts and developmental toys for celebrating a baby’s first big milestone.' },
  { title: 'Personalized Baby Gifts', icon: '🧵', description: 'Meaningful personalized baby gifts that turn everyday essentials into keepsakes.' },
  { title: 'Baby Gift Hampers', icon: '🎁', description: 'Curated baby gift hampers with essentials, comfort items, and sweet surprises.' },
  { title: 'Gifts for New Moms', icon: '🌷', description: 'Comforting and useful gifts for new moms during recovery, feeding, and early parenthood.' },
  { title: 'Gifts for New Dads', icon: '🧢', description: 'Practical gifts for new dads who want to support, bond, and care confidently.' },
  { title: 'Baby Essentials Gift Sets', icon: '🍼', description: 'Everyday baby essentials gift sets with care items parents can genuinely use.' },
  { title: 'Educational Baby Gifts', icon: '📚', description: 'Early learning toys, sensory gifts, and growth-friendly products for curious babies.' },
  { title: 'Soft Toys & Comfort Gifts', icon: '🧸', description: 'Cuddly comfort gifts, soft toys, and soothing baby products for gentle routines.' }
];

export const supportFaqs: FAQ[] = [
  { question: 'Can NuvyaBaby help me choose a newborn baby gift?', answer: 'Yes. Share the baby’s age, occasion, and your budget, and we can guide you toward thoughtful, useful newborn gift ideas.' },
  { question: 'Do you write parenting tips for first-time parents?', answer: 'Yes. Our blog focuses on newborn care, baby essentials, safety, gift ideas, and simple parenting guidance.' },
  { question: 'Are the gift suggestions product recommendations or medical advice?', answer: 'Gift and parenting content is informational only. For medical concerns, always speak with a qualified healthcare professional.' },
  { question: 'Can brands collaborate with NuvyaBaby?', answer: 'Yes. Use the collaboration query type and include details about your brand, product category, and target audience.' }
];

export const samplePosts = [
  { title: 'Best Baby Gifts for Newborns: A Complete Guide for Parents and Families', slug: 'best-baby-gifts-for-newborns', category: 'Baby Gifting Ideas', excerpt: 'A warm guide to choosing newborn baby gifts that are beautiful, safe, useful, and emotionally meaningful.', readingTime: 7 },
  { title: 'Unique Baby Shower Gift Ideas That New Parents Will Actually Use', slug: 'unique-baby-shower-gift-ideas', category: 'Baby Shower Ideas', excerpt: 'Thoughtful baby shower gift ideas that balance cuteness with everyday practicality for new parents.', readingTime: 6 },
  { title: 'Newborn Baby Essentials Every Parent Should Know', slug: 'newborn-baby-essentials', category: 'Baby Essentials', excerpt: 'A simple list of newborn essentials to help families prepare for the first weeks with confidence.', readingTime: 8 }
];
