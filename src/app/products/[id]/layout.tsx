import { Button } from '@components/common/atoms/Button'
import ArrowLeftIcon from '@public/icons/arrow-left-icon.svg'
import CommentInfoIcon from '@public/icons/comment-info-icon.svg'

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex py-8 flex-col bg-white flex-grow items-center">
      <div className="container">
        <div className="flex mb-10">
          <Button variant="TEXT">
            <ArrowLeftIcon />
          </Button>
          <div className="flex-grow" />
          <Button className="rounded-full w-11 h-11 items-center px-3 rounded-br-none">
            <CommentInfoIcon className="fill-white" height={24} width={24} />
          </Button>
        </div>
        {children}
      </div>
    </div>
  )
}
