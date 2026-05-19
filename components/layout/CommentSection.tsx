"use client";

import { useState } from "react";
import Image from "next/image";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Reply {
  id: number;
  author: string;
  avatar: string;
  date: string;
  content: string;
}

interface Comment {
  id: number;
  author: string;
  avatar: string;
  date: string;
  content: string;
  replies?: Reply[];
}

// ─── Mock Data ───────────────────────────────────────────────────────────────

const mockComments: Comment[] = [
  {
    id: 1,
    author: "UJANG YUSMEIDI S.P., M.Agr.",
    avatar: "https://i.pravatar.cc/40?img=12",
    date: "28 Mar 2024 11:15",
    content:
      "Mohon maaf, apakah sertifikatnya sudah tidak dapat diunduh ? Karena saya mau download ada konfirmasi bahwa TOTP aktivasi salah Bagaimana ya solusinya ?",
    replies: [
      {
        id: 11,
        author: "DINA RIKHA RIYANAWATI, S.Pd",
        avatar: "https://i.pravatar.cc/40?img=5",
        date: "28 Mar 2024 11:15",
        content: "saya mengunduh sertifikatnya kok juga belumbisa",
      },
    ],
  },
  {
    id: 2,
    author: "BUDI SANTOSO",
    avatar: "https://i.pravatar.cc/40?img=8",
    date: "27 Mar 2024 09:30",
    content:
      "Terima kasih atas informasinya. Semoga timnas kita bisa tampil lebih baik di putaran berikutnya!",
    replies: [],
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

const MAX_CHARS = 500;

function AvatarCircle({ src, size = 40 }: { src: string; size?: number }) {
  return (
    <div
      className="rounded-full overflow-hidden shrink-0 bg-gray-200"
      style={{ width: size, height: size }}
    >
      <img
        src={src}
        alt="avatar"
        width={size}
        height={size}
        className="object-cover"
      />
    </div>
  );
}

function CommentInput({
  placeholder = "Apa yang ingin anda tanyakan?",
  onSubmit,
  compact = false,
}: {
  placeholder?: string;
  onSubmit: (text: string) => void;
  compact?: boolean;
}) {
  const [text, setText] = useState("");
  const [focused, setFocused] = useState(false);

  const handleSubmit = () => {
    if (!text.trim()) return;
    onSubmit(text.trim());
    setText("");
  };

  return (
    <div className="w-full">
      <div
        className={`relative border rounded-lg transition-all duration-200 ${
          focused ? "border-brand shadow-sm" : "border-[#E0E0E0]"
        } bg-white`}
      >
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value.slice(0, MAX_CHARS))}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          rows={compact ? 3 : 4}
          className="w-full px-4 pt-3 pb-8 text-sm text-text-primary placeholder:text-[#BDBDBD] resize-none outline-none rounded-lg bg-transparent"
        />
        <span className="absolute bottom-2 right-3 text-xs text-[#BDBDBD]">
          {text.length}/{MAX_CHARS}
        </span>
      </div>
      <button
        onClick={handleSubmit}
        disabled={!text.trim()}
        className="mt-3 px-6 py-2 rounded-lg bg-brand text-white text-sm font-semibold transition-opacity disabled:opacity-40 hover:opacity-90 active:scale-95"
      >
        Kirim
      </button>
    </div>
  );
}

function ReplyItem({ reply }: { reply: Reply }) {
  return (
    <div className="flex gap-3 mt-4">
      <AvatarCircle src={reply.avatar} size={36} />
      <div className="flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-text-primary">
            {reply.author}
          </span>
          <span className="text-[#BDBDBD] text-xs">•</span>
          <span className="text-xs text-text-secondary">{reply.date}</span>
        </div>
        <p className="mt-1 text-sm text-text-secondary leading-relaxed">
          {reply.content}
        </p>
        <button className="mt-2 text-xs font-semibold text-brand hover:underline">
          Balas
        </button>
      </div>
    </div>
  );
}

function CommentItem({
  comment,
  onReply,
}: {
  comment: Comment;
  onReply: (id: number, text: string) => void;
}) {
  const [showReplyBox, setShowReplyBox] = useState(false);

  return (
    <div className="py-5 border-b border-[#E0E0E0] last:border-b-0">
      {/* Top-level comment */}
      <div className="flex gap-3">
        <AvatarCircle src={comment.avatar} />
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-semibold text-text-primary">
              {comment.author}
            </span>
            <span className="text-[#BDBDBD] text-xs">•</span>
            <span className="text-xs text-text-secondary">{comment.date}</span>
          </div>
          <p className="mt-2 text-sm text-text-secondary leading-relaxed">
            {comment.content}
          </p>
          <button
            onClick={() => setShowReplyBox((v) => !v)}
            className="mt-2 text-xs font-semibold text-brand hover:underline"
          >
            Balas
          </button>
        </div>
      </div>

      {/* Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="ml-13 pl-4 border-l-2 border-[#F0F0F0]">
          {comment.replies.map((r) => (
            <ReplyItem key={r.id} reply={r} />
          ))}
        </div>
      )}

      {/* Reply input */}
      {showReplyBox && (
        <div className="ml-13 mt-4">
          <CommentInput
            placeholder="Tulis balasan..."
            compact
            onSubmit={(text) => {
              onReply(comment.id, text);
              setShowReplyBox(false);
            }}
          />
        </div>
      )}
    </div>
  );
}

// ─── Pagination ───────────────────────────────────────────────────────────────

function Pagination({
  page,
  total,
  perPage,
  onPageChange,
  onPerPageChange,
}: {
  page: number;
  total: number;
  perPage: number;
  onPageChange: (p: number) => void;
  onPerPageChange?: (n: number) => void;
}) {
  const totalPages = Math.ceil(total / perPage);

  // Show at most 2 page numbers like screenshot: 1 2
  const visiblePages = Array.from(
    { length: Math.min(totalPages, 2) },
    (_, i) => i + 1,
  );

  return (
    <div className="flex items-center justify-between mt-6 border-t border-[#E0E0E0] pt-4">
      {/* Left: Item per page */}
      <div className="flex items-center gap-1.5 text-sm text-text-secondary">
        <span>Item per page</span>
        <div className="relative inline-flex items-center">
          <select
            value={perPage}
            onChange={(e) => onPerPageChange?.(Number(e.target.value))}
            className="appearance-none bg-transparent border-none text-sm text-text-primary font-medium pr-4 outline-none cursor-pointer"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
          {/* Custom chevron */}
          <svg
            className="pointer-events-none absolute right-0 text-text-secondary"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span>of {total}</span>
      </div>

      {/* Right: Page navigation */}
      <div className="flex items-center gap-1">
        {/* Prev */}
        <button
          onClick={() => onPageChange(Math.max(1, page - 1))}
          disabled={page === 1}
          className="w-7 h-7 flex items-center justify-center text-text-secondary disabled:opacity-30 hover:text-brand transition-colors"
        >
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
            <path
              d="M6 1L1 6L6 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Page numbers */}
        {visiblePages.map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`w-7 h-7 flex items-center justify-center rounded text-sm font-medium transition-colors ${
              p === page
                ? "text-brand font-bold"
                : "text-text-secondary hover:text-brand"
            }`}
          >
            {p}
          </button>
        ))}

        {/* Next */}
        <button
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
          className="w-7 h-7 flex items-center justify-center text-text-secondary disabled:opacity-30 hover:text-brand transition-colors"
        >
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
            <path
              d="M1 1L6 6L1 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>(mockComments);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const TOTAL = 200;

  const currentUserAvatar = "https://i.pravatar.cc/40?img=3";

  const handleAddComment = (text: string) => {
    const newComment: Comment = {
      id: Date.now(),
      author: "Anda",
      avatar: currentUserAvatar,
      date: new Date().toLocaleString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      content: text,
      replies: [],
    };
    setComments((prev) => [newComment, ...prev]);
  };

  const handleReply = (commentId: number, text: string) => {
    setComments((prev) =>
      prev.map((c) =>
        c.id === commentId
          ? {
              ...c,
              replies: [
                ...(c.replies ?? []),
                {
                  id: Date.now(),
                  author: "Anda",
                  avatar: currentUserAvatar,
                  date: new Date().toLocaleString("id-ID", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  }),
                  content: text,
                },
              ],
            }
          : c,
      ),
    );
  };

  return (
    <section className="mt-60">
      {/* Section header */}
      <h2 className="flex items-center gap-4 font-nunito-sans text-2xl font-bold text-text-primary mb-8">
        <span className="inline-block h-6 w-1 rounded-full bg-brand" />
        Komentar
      </h2>

      {/* New comment input */}
      <div className="flex gap-4 items-start mb-6">
        <AvatarCircle src={currentUserAvatar} />
        <div className="flex-1">
          <CommentInput onSubmit={handleAddComment} />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E0E0E0]" />

      {/* Comment list */}
      <div>
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            onReply={handleReply}
          />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        page={page}
        total={TOTAL}
        perPage={perPage}
        onPageChange={setPage}
        onPerPageChange={(n) => {
          setPerPage(n);
          setPage(1);
        }}
      />
    </section>
  );
};

export default CommentSection;
