import CheckIcon from '@/assets/check.svg'
import { twMerge } from 'tailwind-merge';

const pricingTiers = [
    {
      title: "Free",
      monthlyPrice: 0,
      buttonText: "Get started for free",
      popular: false,
      inverse: false,
      features: [
        "Up to 5 project members",
        "Unlimited tasks and projects",
        "2GB storage",
        "Integrations",
        "Basic support",
      ],
    },
    {
      title: "Pro",
      monthlyPrice: 9,
      buttonText: "Sign up now",
      popular: true,
      inverse: true,
      features: [
        "Up to 50 project members",
        "Unlimited tasks and projects",
        "50GB storage",
        "Integrations",
        "Priority support",
        "Advanced support",
        "Export support",
      ],
    },
    {
      title: "Business",
      monthlyPrice: 19,
      buttonText: "Sign up now",
      popular: false,
      inverse: false,
      features: [
        "Up to 5 project members",
        "Unlimited tasks and projects",
        "200GB storage",
        "Integrations",
        "Dedicated account manager",
        "Custom fields",
        "Advanced analytics",
        "Export capabilities",
        "API access",
        "Advanced security features",
      ],
    },
  ];
  
  export const Pricing = () => {
    return <section className="py-24">
        <div className='container'>
            <h2 className="section-title">Pricing</h2>
            <p className="section-description mt-5">Free forever, upgrade for unlimited tasks, better security and exclusive features.</p>
            <div className=' flex flex-col gap-6 items-center'>
                {pricingTiers.map(({title, monthlyPrice,buttonText,popular,inverse,features})=>(
                <div key={title} className={twMerge('p-10 rounded-3xl  shadow-[0_7px_14px_[#EAEAEA] border-[#F1F1F1]', inverse === true && 'border-black bg-black text-white')}>
                    <div className=' flex justify-between'>

                        <h3 className={twMerge(inverse === true&& 'text-white/60')}>{title}</h3>
                        {popular === true && (

                        <div className='inline-flex py-1.5 px-4 rounded-xl text-sm border border-white/20'>
                            <span className=' bg-[linear-gradient(to_right, #DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium'>Popular</span>
                        </div>
                        )}
                    </div>
                    <div className=' flex items-baseline gap-1 mt-[30px]'>
                        <span className=' text-4xl font-bold tracking-tighter leading-none'>${monthlyPrice}</span>
                        <span className=' tracking-tight font-bold text-black/50'>/month</span>
                    </div>
                    <button className={twMerge('btn btn-primary w-full mt-[30px]', inverse === true  && 'bg-white text-black')}>{buttonText}</button>
                    <ul className=' flex flex-col gap-5 mt-[32px]'>
                        {features.map(feature=>(
                            <li className='text-sm flex items-center gap-4' key={feature}>
                            <CheckIcon className='h-6 w-6'/>
                             <span>{feature}</span>
                             </li>
                        ))}
                    </ul>
                </div>

                ))}
            </div>
        </div>
    </section>
  };
  