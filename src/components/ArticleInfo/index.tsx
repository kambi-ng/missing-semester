import React from "react";
import styles from "./styles.module.css";

interface ArticleInfoProps {
  writer: string;
  writerUrl?: string;
  semester: number;
  relevantSubjects?: string[];
}

const ArticleInfo = ({
  writer,
  writerUrl,
  semester,
  relevantSubjects,
}: ArticleInfoProps) => {
  return (
    <div className={styles.infoContainer}>
      <h3>Informasi Umum</h3>

      <ul>
        <li>
          Penulis: <a href={writerUrl}>{writer}</a>
        </li>
        <li>Semester: {semester}</li>
        {relevantSubjects && (
          <li>
            Mata kuliah yang relevan:
            <ul>
              {relevantSubjects.map((v) => (
                <li>{v}</li>
              ))}
            </ul>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ArticleInfo;
