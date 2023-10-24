import Image from "next/image"

const Menu = () => {
    return (
        <>
            <section id="menu">
                <h1 className="text-center text-3xl py-2 ">Menu</h1>
                <Image alt="menu" className="menu-img" src="/menu.jpg" width={500} height={500} />
            </section>
        </>
    )
}

export default Menu