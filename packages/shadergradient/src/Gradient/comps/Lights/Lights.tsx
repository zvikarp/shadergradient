import { useUIStore } from '@/store'
import { EnvironmentMap } from './Environment'
import { Suspense, useEffect } from 'react'
import { useProgress } from './useProgress'

export function Lights({ lightType, brightness, envPreset }: any) {
  const setLoadingPercentage = useUIStore(
    (state: any) => state.setLoadingPercentage
  )

  return (
    <>
      {lightType === '3d' && <ambientLight intensity={brightness || 1} />}
      {lightType === 'env' && (
        <Suspense fallback={<Loader />}>
          <EnvironmentMap
            envPreset={envPreset}
            background={true}
            loadingCallback={setLoadingPercentage}
          />
        </Suspense>
      )}
    </>
  )
}

function Loader() {
  const { progress } = useProgress()

  // update loader text (at LoaderRoot)
  useEffect(() => {
    const el = document.getElementById('LoaderRoot')
    el.innerHTML = `${progress}% loaded`
    if (progress === 100) {
      setTimeout(() => {
        el.innerHTML = ''
      }, 1000)
    }
  }, [progress])

  return <ambientLight intensity={0.4} />
}
