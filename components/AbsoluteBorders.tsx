import './AbsoluteBorders.css'

export default function AbsoluteBorders({ side, bdSize = '3px', length = "5rem", offset = '1.5rem' }:
    { side: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right', bdSize?: string, length?: string, offset?: string }) {

    switch (side) {
        case 'top-right':
            return (
                <>
                    <div style={{
                        width: length,
                        height: bdSize,
                        top: `-${offset}`,
                        right: `-${offset}`,
                    }} className={`bd-up-r-1 reveal`} />
                    <div style={{
                        width: bdSize,
                        height: length,
                        top: `-${offset}`,
                        right: `-${offset}`,
                    }} className={`bd-up-r-2 reveal`} />
                </>
            )
        case 'top-left':
            return (
                <>
                    <div style={{
                        width: length,
                        height: bdSize,
                        top: `-${offset}`,
                        left: `-${offset}`,
                    }} className={`bd-up-l-1 reveal`} />
                    <div style={{
                        width: bdSize,
                        height: length,
                        top: `-${offset}`,
                        left: `-${offset}`,
                    }} className={`bd-up-l-2 reveal`} />
                </>
            )
        case 'bottom-left':
            return (
                <>
                    <div style={{
                        width: length,
                        height: bdSize,
                        bottom: `-${offset}`,
                        left: `-${offset}`,
                    }} className={`bd-down-l-1 reveal`} />
                    <div style={{
                        width: bdSize,
                        height: length,
                        bottom: `-${offset}`,
                        left: `-${offset}`,
                    }} className={`bd-down-l-2 reveal`} />
                </>
            )
        case 'bottom-right':
            return (
                <>
                    <div style={{
                        width: length,
                        height: bdSize,
                        bottom: `-${offset}`,
                        right: `-${offset}`,
                    }} className={`bd-down-r-1 reveal`} />
                    <div style={{
                        width: bdSize,
                        height: length,
                        bottom: `-${offset}`,
                        right: `-${offset}`,
                    }} className={`bd-down-r-2 reveal`} />
                </>
            )
    }
}
