'use client'

import { useEffect, useRef } from 'react'
import Icon from './Icon'
import FontAwesomeIcon from './FontAwesomeIcon'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  bgColor: string
  iconColor: string
}

export default function FeatureCard({ icon, title, description, bgColor, iconColor }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            target.style.opacity = '1'
            target.style.transform = 'translateY(0)'
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (cardRef.current) {
      cardRef.current.style.opacity = '0'
      cardRef.current.style.transform = 'translateY(20px)'
      cardRef.current.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className="feature-card bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className={`${bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
        {icon.startsWith('fas') || icon.startsWith('fab') ? (
          <FontAwesomeIcon name={icon as any} className="text-2xl" style={{ color: 'inherit' }} />
        ) : (
          <Icon name={icon as any} className="text-2xl" style={{ color: 'inherit' }} />
        )}
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}