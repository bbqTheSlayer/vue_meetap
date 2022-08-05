import "./style.css"
import type {IMusic} from "@/views/AudioPage";

export const Audio = (props: any) => {
    const state = props.state
    const item: IMusic = props.state.item
    item.src ? state.hidePlayer = false : state.hidePlayer = true
    return (
        <>
            {!state.hidePlayer ? (
                <>
                    <div class={state.hide ? "" : "background"}
                         style={{background: `linear-gradient(30deg, ${item.color1},${item.color2})`}}></div>
                    <div class={state.hide ? "" : "player-container"}>
                        <div class={state.hide ? "player-fixed" : "player"}>
                            <div class="imgBox" onClick={() => state.item = {}}>
                                <img style={{borderRadius: "10px 10px 0 0"}} src={item.img} alt="img"/>
                            </div>
                            <div style={{
                                paddingLeft: "5px",
                                fontSize: "16px",
                                fontWeight: 700,
                                textAlign: "center"
                            }}>{item.name}</div>
                            <div style={{paddingLeft: "5px", fontSize: "14px", textAlign: "center"}}>{item.label}</div>
                            <audio controls autoplay>
                                <source src={item.src} type="audio/mp3"/>
                            </audio>
                        </div>
                    </div>
                </>

            ) : null}
        </>

    )
}