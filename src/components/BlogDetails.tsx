import { blogCommentsData, BlogData } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import AddBlogComment from "./AddBlogComments";
import Button from "./shared/Button";

const BlogDetails = ({ blogId }: { blogId: number }) => {
  const [blogData] = BlogData.filter((blog) => blog.id === Number(blogId));

  return (
    <div>
      <BlogHeader image={blogData.image} title={blogData.title} />

      <div className="border-x border-b border-primary-foreground/10 rounded-b-xl lg:p-6 p-3 space-y-6">
        <h2 className="lg:text-4xl text-2xl font-semibold text-primary-foreground">
          {blogData.title}
        </h2>

        <BlogSection paragraphs={blogData.sectionHeading.paragraphs} />

        <BlogSection
          title={blogData.sectionBody.title}
          paragraphs={blogData.sectionBody.paragraphs}
        />

        <div className="space-y-4">
          <BlogSection
            title={blogData.sectionFooter.title}
            paragraphs={blogData.sectionFooter.paragraphs}
          />

          <BlogImageGallery images={blogData.sectionFooter.images} />

          <p className="text-primary-foreground/80">
            {blogData.sectionFooter.conclusion}
          </p>
        </div>

        <BlogTags tags={blogData.tags} />

        <div className="mt-12">
          <BlogComments comments={blogData.comments} />
        </div>

        <div className="mt-12">
          <AddBlogComment />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;

// BlogHeader Component
const BlogHeader = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className="relative 2xl:h-[600px] md:h-[500px] h-[300px] rounded-t-xl overflow-hidden">
      <Image src={image} layout="fill" objectFit="cover" alt={title} />
    </div>
  );
};

// BlogSection Component
const BlogSection = ({
  title,
  paragraphs,
}: {
  title?: string;
  paragraphs: string[];
}) => {
  return (
    <div className={"space-y-4 text-lg"}>
      <h3 className="text-2xl font-semibold text-primary-foreground">
        {title}
      </h3>
      {paragraphs.map((item, i) => (
        <p key={i} className="text-primary-foreground/80">
          {item}
        </p>
      ))}
    </div>
  );
};

// BlogImageGallery Component
const BlogImageGallery = ({ images }: { images: string[] }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-4">
      {images.map((image, i) => (
        <div key={i} className="relative lg:w-[230px] h-[170px] flex-shrink-0">
          <Image src={image} objectFit="cover" layout="fill" alt="Blog Image" />
        </div>
      ))}
    </div>
  );
};

const BlogTags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex flex-wrap gap-3 items-center ">
      <p className="text-lg text-primary-foreground font-semibold uppercase">
        Tags:
      </p>
      <div className="flex gap-3">
        {tags.map((tag, i) => (
          <div
            key={i}
            className="px-5 py-1 border-2 border-primary-foreground shadow-sm cursor-pointer rounded-sm hover:bg-muted-foreground/10 duration-200"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

const BlogComments = ({ comments }: { comments: number[] }) => {
  const commentsData = blogCommentsData.filter((comment) =>
    comments.includes(comment.id)
  );

  return (
    <div>
      <p className="text-2xl md:text-4xl font-semibold text-primary-foreground">
        {comments.length} Comments
      </p>

      <div className="space-y-4 mt-4">
        {commentsData.map((comment, i) => (
          <div
            key={i}
            className={cn(
              "flex flex-col md:flex-row gap-4 md:gap-6 text-primary-foreground border-b pb-4 md:pb-6 border-primary-foreground/10 mt-4 md:mt-6 items-start",
              {
                "border-b-0": i === commentsData.length - 1,
              }
            )}
          >
            {/* Image container */}
            <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={comment.image}
                objectFit="cover"
                layout="fill"
                alt={comment.name}
              />
            </div>
            {/* Comment content */}
            <div className="w-full">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0">
                <p className="text-lg md:text-xl font-semibold">
                  {comment.name}
                </p>
                <div className="flex items-center w-full lg:w-fit justify-between gap-2 md:gap-3">
                  <p className="text-primary-foreground/80 text-xs md:text-sm">
                    {new Date(comment.date).toLocaleString()}
                  </p>
                  <Button className="bg-primary-foreground hover:bg-primary-foreground/90 text-xs md:text-sm">
                    Reply
                  </Button>
                </div>
              </div>
              <p className="text-base md:text-lg mt-2">{comment.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
