import acmeLogo from '@/assets/logo-acme.png'
import quantLogo from '@/assets/logo-quantum.png'
import echoLogo from '@/assets/logo-echo.png'
import celestialLogo from '@/assets/logo-celestial.png'
import pulseLogo from '@/assets/logo-pulse.png'
import apexLogo from '@/assets/logo-apex.png'
import Image from 'next/image'

const LogoTicker = () => {
  return (
    <div className=' py-8 md:py-12 bg-white'>

        <div className='container'>
            <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent]'>
                <div className=' flex gap-14 flex-none'>
                    <Image className='logo-ticker-image' src={acmeLogo} alt=''/>
                    <Image className='logo-ticker-image' src={quantLogo} alt=''/>
                    <Image className='logo-ticker-image' src={echoLogo} alt=''/>
                    <Image className='logo-ticker-image' src={celestialLogo} alt=''/>
                    <Image className='logo-ticker-image' src={pulseLogo} alt=''/>
                    <Image className='logo-ticker-image' src={apexLogo} alt=''/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default LogoTicker