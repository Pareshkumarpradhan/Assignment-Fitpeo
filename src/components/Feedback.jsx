

import { StarIcon } from '@heroicons/react/20/solid'

const reviews = [
  {
    id: 1,
    rating: 5,
    content: `
      <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
    `,
    date: 'July 16, 2021',
    datetime: '2021-07-16',
    author: 'Emily Selman',
    avatarSrc:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
  },
  {
    id: 2,
    rating: 5,
    content: `
      <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
    `,
    date: 'July 12, 2021',
    datetime: '2021-07-12',
    author: 'Hector Gibbons',
    avatarSrc:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
  },
  // More reviews...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Feedback() {
  return (
    <div className="">
      <div>
        <h2 className="text-xl font-medium tracking-tight text-white pl-2 py-2">Customer Reviews</h2>

        <div className="-mt-10">
          {reviews.map((review, reviewIdx) => (
            <div key={review.id} className="flex space-x-2 text-sm text-white">
              <div className="flex-none py-10 pl-1">
                <img alt="" src={review.avatarSrc} className="h-10 w-10 rounded-full bg-gray-100" />
              </div>
              <div className={classNames(reviewIdx === 0 ? '' : 'border-t border-gray-200', 'flex-1 py-10')}>
                <h3 className="font-medium text-white">{review.author}</h3>
                <p>
                  <time dateTime={review.datetime}>{review.date}</time>
                </p>

                <div className="mt-1 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0',
                      )}
                    />
                  ))}
                </div>
                {/* <p className="sr-only">{review.rating} out of 5 stars</p> */}

                <div
                  dangerouslySetInnerHTML={{ __html: review.content }}
                  className="prose prose-sm mt-1 max-w-none text-white pr-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
