'use client'

type Props = {
  email: string
  subject: string
}

export default function EmailButton({ email, subject }: Props) {
  const onEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}`
    window.location.href = mailto

    // Fallback to Gmail compose (for Windows without a default mail app)
    setTimeout(() => {
      const gmailUrl =
        `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`
      window.open(gmailUrl, '_blank', 'noopener,noreferrer')
    }, 350)
  }

  return (
    <a
      className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:bg-white/90"
      href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
      onClick={onEmailClick}
    >
      Email me
    </a>
  )
}
