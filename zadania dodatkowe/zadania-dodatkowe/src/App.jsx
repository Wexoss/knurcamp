import { SygnalizacjaV1 } from "./components/SygnalizacjaV1"
import { SygnalizacjaV2 } from "./components/SygnalizacjaV2"
import { SygnalizacjaV3 } from "./components/SygnalizacjaV3"
import { PolscyNoblisciV1 } from "./components/PolscyNoblisciV1"
import { PolscyNoblisciV2 } from "./components/PolscyNoblisciV2"
import { ListaKsiazekV1 } from "./components/ListaKsiazekV1"
import { PogodaV1 } from "./components/PogodaV1"

function App() {
  return (
    <>
      <SygnalizacjaV1/>
      <SygnalizacjaV2/>
      <SygnalizacjaV3/>
      <PolscyNoblisciV1/>
      <PolscyNoblisciV2/>
      <ListaKsiazekV1/>
      <PogodaV1 />
    </>
  )
}

export default App
