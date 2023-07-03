import Image from "next/image";
export default function Home() {
  return (
    <>
      <main className="w-full flex flex-col justify-center items-center min-h-screen">
        <section className="max-w-[1200px] w-full h-screen px-4 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-7xl font-black uppercase text-center mb-8">
            Bienvenido a nuestra tienda de productos para malabares
          </h1>
          <p>
            En los albores del tiempo, los malabares surgieron como un arte
            ancestral que fascinaba a las tribus. Los hábiles malabaristas
            dominaban el arte de lanzar y atrapar objetos en perfecta sincronía,
            cautivando a los espectadores con su destreza y elegancia. A lo
            largo de los siglos, los malabares evolucionaron, desde simples
            piedras hasta coloridas pelotas y aros en llamas. Esta habilidad se
            transmitió de generación en generación, deleitando a multitudes en
            festivales y celebraciones. Los malabares, un símbolo eterno de
            destreza humana y creatividad, continúan maravillando al mundo con
            su encanto y habilidad.
          </p>
        </section>
        <section className="max-w-[1200px] w-full h-screen px-4 flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-5xl font-black uppercase text-center mb-8">
            Descubre un mundo de diversión y habilidad
          </h2>
          <div className="flex items-center justify-center gap-12">
            <p className="w-1/2">
              En nuestra tienda encontrarás una amplia selección de productos
              para malabares, desde pelotas y aros hasta diábolos y clavas.
              ¡Prepárate para desafiar la gravedad y sorprender a todos con tus
              habilidades!
            </p>
            <div className="relative aspect-square h-96">
              <Image
                src="https://images.unsplash.com/photo-1502144696405-e84600828d73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80"
                alt="Malabares"
                fill
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>
        <section className="max-w-[1200px] w-full h-screen px-4 flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-5xl font-black uppercase text-center mb-8">
            Productos de alta calidad para malabaristas de todos los niveles
          </h2>
          <Image
            src="https://images.unsplash.com/photo-1583299566850-f00a57e46163?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
            alt="Malabares"
            width={1200}
            height={800}
          />
        </section>
      </main>
    </>
  );
}
