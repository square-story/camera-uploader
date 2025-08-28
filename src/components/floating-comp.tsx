import ModeSwitch from "./mode-switch"

const FloatingModeSwitch = () => (
    <div
        className="fixed bottom-6 right-6 z-50 bg-background/80 rounded-full shadow-lg p-2 border border-border"
        style={{ backdropFilter: "blur(8px)" }}
    >
        <ModeSwitch />
    </div>
)

export default FloatingModeSwitch