import { observer } from "mobx-react-lite"
import gameStore from "../../store/gameStore"

export default observer(function TypingSpeed() {
  return (
    <div>
      <p>
        Скорость:{" "}
        {Math.floor((gameStore.symCount / gameStore.seconds) * 60) || 0} зн/мин
      </p>
    </div>
  )
})
