import { useState, useEffect } from 'react'
import { experiences } from '../../data/experiences'

const MOIS = {
  janvier: 0, février: 1, fevrier: 1, mars: 2, avril: 3, mai: 4, juin: 5,
  juillet: 6, août: 7, aout: 7, septembre: 8, octobre: 9, novembre: 10,
  décembre: 11, decembre: 11,
}

function versValeurTemps(dateStr) {
  const parts = dateStr.trim().split(/\s+/)
  let jour = 15, mois = 0, annee

  if (parts.length === 3) {
    jour = parseInt(parts[0], 10)
    mois = MOIS[parts[1].toLowerCase()] ?? 0
    annee = parseInt(parts[2], 10)
  } else if (parts.length === 2) {
    mois = MOIS[parts[0].toLowerCase()] ?? 0
    annee = parseInt(parts[1], 10)
  } else {
    annee = parseInt(parts[parts.length - 1], 10)
  }

  return annee + mois / 12 + jour / 365
}

const LIGNE_DUREE = 1400 // ms, durée du tracé de la ligne

function ParcoursSection() {
  const [dessine, setDessine] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDessine(true), 50)
    return () => clearTimeout(t)
  }, [])

  const principaux = experiences.filter((e) => e.type === 'principal')
  const imbriques = experiences.filter((e) => e.type === 'imbrique')

  const bornes = principaux.map((e) => {
    const [debut, fin] = e.periode.split('-').map((s) => s.trim())
    return { start: versValeurTemps(debut), end: versValeurTemps(fin || debut) }
  })
  const minTemps = Math.min(...bornes.map((b) => b.start))
  const maxTemps = Math.max(...bornes.map((b) => b.end))

  const calculerPosition = (dateStr) => {
    const t = versValeurTemps(dateStr)
    const ratio = (t - minTemps) / (maxTemps - minTemps)
    return 5 + ratio * 85
  }

  const aujourdHui = new Date()
  const tAujourdHui = aujourdHui.getFullYear() + aujourdHui.getMonth() / 12
  const posAujourdHui = tAujourdHui >= minTemps && tAujourdHui <= maxTemps
    ? 5 + ((tAujourdHui - minTemps) / (maxTemps - minTemps)) * 85
    : null

  return (
    <div className="px-16 py-12 w-full">
      <h2 className="font-heading font-bold text-3xl mb-10" style={{ color: '#f5fff8' }}>
        Parcours
      </h2>

      {/* Zone des épisodes éphémères */}
      <div className="relative" style={{ minHeight: '140px' }}>
        {imbriques.map((exp) => {
          const [debut] = exp.periode.split('-').map((s) => s.trim())
          const pos = calculerPosition(debut)
          const delai = (pos / 90) * LIGNE_DUREE + 200
          return (
            <div
              key={exp.id}
              className="absolute"
              style={{
                left: `${pos}%`,
                bottom: '20px',
                width: '260px',
                opacity: dessine ? 1 : 0,
                transform: dessine ? 'translateY(0)' : 'translateY(8px)',
                transition: `opacity 0.5s ease-out ${delai}ms, transform 0.5s ease-out ${delai}ms`,
              }}
            >
              <p className="font-mono text-xs mb-1" style={{ color: '#ffb000' }}>
                {exp.periode}
                {exp.contexte && <span style={{ opacity: 0.7 }}> · {exp.contexte}</span>}
              </p>
              <p className="font-heading font-semibold text-base mb-1" style={{ color: '#f5fff8' }}>
                {exp.titre}
              </p>
              <p className="font-body text-xs" style={{ color: '#a9cbb0' }}>
                {exp.lieu}
              </p>
              <div
                className="absolute"
                style={{ left: '4px', top: '100%', width: '1px', height: '20px', backgroundColor: 'rgba(255,176,0,0.5)' }}
              />
              <span
                className="absolute rounded-full"
                style={{ left: '0px', top: 'calc(100% + 20px)', width: '9px', height: '9px', backgroundColor: '#ffb000', boxShadow: '0 0 10px rgba(255,176,0,0.6)' }}
              />
            </div>
          )
        })}
      </div>

      {/* Ligne principale, tracé progressif */}
      <div
        className="relative"
        style={{ height: '2px', backgroundColor: 'rgba(159,255,196,0.08)', overflow: 'visible' }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '2px',
            width: dessine ? '100%' : '0%',
            background: 'linear-gradient(90deg, rgba(159,255,196,0.1), rgba(159,255,196,0.6) 10%, rgba(159,255,196,0.6) 90%, rgba(159,255,196,0.1))',
            transition: `width ${LIGNE_DUREE}ms ease-out`,
          }}
        />

        {principaux.map((exp) => {
          const [debut] = exp.periode.split('-').map((s) => s.trim())
          const pos = calculerPosition(debut)
          const delai = (pos / 90) * LIGNE_DUREE
          return (
            <span
              key={exp.id}
              className="absolute rounded-full"
              style={{
                left: `${pos}%`,
                top: '-6px',
                width: '14px',
                height: '14px',
                backgroundColor: '#9fffc4',
                boxShadow: '0 0 14px rgba(159,255,196,0.8)',
                opacity: dessine ? 1 : 0,
                transform: dessine ? 'scale(1)' : 'scale(0)',
                transition: `opacity 0.3s ease-out ${delai}ms, transform 0.3s ease-out ${delai}ms`,
              }}
            />
          )
        })}

        {posAujourdHui !== null && (
          <span
            className="absolute rounded-full"
            style={{
              left: `${posAujourdHui}%`,
              top: '-6px',
              width: '14px',
              height: '14px',
              border: '2px solid #9fffc4',
              opacity: dessine ? 0.4 : 0,
              transform: dessine ? 'scale(1)' : 'scale(0)',
              transition: `opacity 0.3s ease-out ${LIGNE_DUREE}ms, transform 0.3s ease-out ${LIGNE_DUREE}ms`,
            }}
          />
        )}
      </div>

      {/* Contenu sous la ligne */}
      <div className="relative mt-6" style={{ height: '0px' }}>
        {principaux.map((exp) => {
          const [debut] = exp.periode.split('-').map((s) => s.trim())
          const pos = calculerPosition(debut)
          const delai = (pos / 90) * LIGNE_DUREE + 150
          return (
            <div
              key={exp.id}
              className="absolute"
              style={{
                left: `${pos}%`,
                top: 0,
                width: '300px',
                opacity: dessine ? 1 : 0,
                transform: dessine ? 'translateY(0)' : 'translateY(8px)',
                transition: `opacity 0.5s ease-out ${delai}ms, transform 0.5s ease-out ${delai}ms`,
              }}
            >
              <p className="font-mono text-xs mb-2" style={{ color: '#8bb096' }}>
                {exp.periode}
                {exp.enCours && <span className="en-cours" style={{ marginLeft: '6px' }}>en cours</span>}
              </p>
              <p className="font-heading font-bold text-xl mb-2" style={{ color: '#f5fff8', lineHeight: 1.3 }}>
                {exp.titre}
              </p>
              {exp.lieu && (
                <p className="font-body text-sm" style={{ color: '#a9cbb0' }}>
                  {exp.lieu}
                </p>
              )}
            </div>
          )
        })}

        {posAujourdHui !== null && (
          <p
            className="absolute font-mono text-xs opacity-50"
            style={{
              left: `${posAujourdHui - 15}%`,
              top: 0,
              color: '#8bb096',
              width: '160px',
              textAlign: 'right',
              opacity: dessine ? 0.5 : 0,
              transition: `opacity 0.5s ease-out ${LIGNE_DUREE + 150}ms`,
            }}
          >
            Aujourd'hui
          </p>
        )}
      </div>
    </div>
  )
}

export default ParcoursSection