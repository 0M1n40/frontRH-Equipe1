import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
    let data = new Date().getFullYear()

    return (
        <div className="w-full bg-rose-200 text-zinc-600 py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-start">

                    <div className="flex flex-col gap-2">
                        <p className="text-lg">Acesse nossas redes sociais</p>

                        <div className="flex gap-2" >
                            <LinkedinLogo size={32} weight='thin' />
                            <InstagramLogo size={32} weight='thin' />
                            <FacebookLogo size={32} weight='thin' />
                        </div>

                        <p className="text-lg">
                            RHConnect | Copyright: {data}
                        </p>
                    </div>

                    <div className="mt-4 md:mt-0">
                        <a 
                            href="/contato" 
                            className="text-lg md:text-xl font-bold hover:text-rose-500 transition-colors whitespace-nowrap"
                        >
                            Contato
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
