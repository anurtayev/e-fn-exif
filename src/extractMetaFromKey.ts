const SUBSTRING_ANSI_DATES_BEGIN_WITH = "20";
const MEDIA_PREFIX = "media";

export default (
  key: string | undefined | null
):
  | undefined
  | { dateCreated: string; yearCreated: number; monthCreated: number } => {
  if (!key) return;
  if (!key.startsWith(MEDIA_PREFIX)) return;

  const firstToken = key.split("/")[1].split(".")[0];

  if (
    firstToken.length !== 8 ||
    !firstToken.startsWith(SUBSTRING_ANSI_DATES_BEGIN_WITH)
  )
    return;

  const year = Number(firstToken.substring(0, 4));
  const month = Number(firstToken.substring(4, 6)) - 1;
  const day = Number(firstToken.substring(6));

  if (isNaN(year) || isNaN(month) || isNaN(day)) return;

  // mon starts from 0
  // day starts from 1
  if (year < 2000 || month < 1 || month > 11 || day < 1 || day > 31) return;

  const dateCreatedBin = new Date(year, month, day);

  return {
    dateCreated: dateCreatedBin.toISOString(),
    yearCreated: dateCreatedBin.getFullYear(),
    monthCreated: dateCreatedBin.getMonth() + 1,
  };
};
