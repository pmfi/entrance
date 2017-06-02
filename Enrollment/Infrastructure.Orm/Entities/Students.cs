using System.Data;
using System.Data.SQLite;

namespace Infrastructure.Orm.Entities
{
    public class Students
    {
        //public DataTable SpecialtySelect(string FN, string SN, string MN)
        //{
        //    SQLiteConnection conn = new SQLiteConnection("Data Source=pmfi.db; Version=3;");
        //    conn.Open();
        //    SQLiteCommand selectCommand = conn.CreateCommand();
        //    string selectText = "Select S.StudentName as FirstName, S.StudentSurname as Surname, S.StudentPatronymic as MiddleName, Sp.SpecialtyName as Specialty"
        //    + " from StudentsSpecialty as SS, students as S, Specialty as Sp"
        //    + " where SS.StudentID = S.StudentID AND Sp.SpecialtyID = SS.SpecialtyID AND FirstName = @FN AND Surname = @SN AND MiddleName = @MN";
        //    selectCommand.CommandText = selectText;
        //    selectCommand.Parameters.AddWithValue("@FN", FN);
        //    selectCommand.Parameters.AddWithValue("@SN", SN);
        //    selectCommand.Parameters.AddWithValue("@MN", MN);
        //    DataTable specialtysDT = new DataTable();
        //    specialtysDT.Reset();
        //    SQLiteDataAdapter specialtyDA = new SQLiteDataAdapter(selectCommand);
        //    specialtyDA.Fill(specialtysDT);
        //    conn.Close();
        //    return specialtysDT;
        //}

        //public DataTable StudentSelect(int Compliance, string Specialty)
        //{
        //    SQLiteConnection conn = new SQLiteConnection("Data Source=pmfi.db; Version=3;");
        //    conn.Open();
        //    SQLiteCommand selectCommand = conn.CreateCommand();
        //    string selectText = "select S.StudentID, S.StudentName as FirstName, S.StudentSurname as Surname, S.StudentPatronymic as MiddleName, SUM (SA.PointsCount) as Score"
        //    + " from StudentsAchievements as SA, students as S, Specialty as Sp, StudentsSpecialty as SS"
        //    + " where SA.StudentID = S.StudentID AND SS.StudentID = S.StudentID AND Sp.SpecialtyID = SS.SpecialtyID AND S.Deleted = 0 AND S.Compliance = @Compliance AND Sp.SpecialtyName = @Specialty"
        //    + " group by S.StudentID order by Score desc";
        //    selectCommand.CommandText = selectText;
        //    selectCommand.Parameters.AddWithValue("@Compliance", Compliance);
        //    selectCommand.Parameters.AddWithValue("@Specialty", Specialty);
        //    DataTable studentsDT = new DataTable();
        //    studentsDT.Reset();
        //    SQLiteDataAdapter selectDA = new SQLiteDataAdapter(selectCommand);
        //    selectDA.Fill(studentsDT);
        //    conn.Close();
        //    return studentsDT;
        //}

        public DataTable StudentSelect(int Compliance)
        {
            SQLiteConnection conn = new SQLiteConnection("Data Source=pmfi_full.db; Version=3;");
            conn.Open();
            SQLiteCommand selectCommand = conn.CreateCommand();
            string selectText = "select S.StudentID as ID, S.StudentName as FirstName, S.StudentSurname as Surname, S.StudentPatronymic as MiddleName, SUM (SA.PointsCount) as Score, Sp.SpecialtyID as specID, Sp.SpecialtyName as specName, Sp.SpecialtyCount as specCount, SS.Orderr as Orderr"
            + " from StudentsAchievements as SA, students as S, Specialty as Sp, StudentsSpecialty as SS"
            + " where SA.StudentID = S.StudentID AND SS.StudentID = S.StudentID AND Sp.SpecialtyID = SS.SpecialtyID AND S.Deleted = 0 AND S.Compliance = @Compliance"
            + " group by S.StudentID, Sp.SpecialtyID order by Score desc";
            selectCommand.CommandText = selectText;
            selectCommand.Parameters.AddWithValue("@Compliance", Compliance);
            DataTable studentsDT = new DataTable();
            studentsDT.Reset();
            SQLiteDataAdapter selectDA = new SQLiteDataAdapter(selectCommand);
            selectDA.Fill(studentsDT);
            conn.Close();
            return studentsDT;
        }

        //public DataTable StudentSelect(int Compliance, string FN, string SN, string MN)
        //{
        //    SQLiteConnection conn = new SQLiteConnection("Data Source=pmfi.db; Version=3;");
        //    conn.Open();
        //    SQLiteCommand selectCommand = conn.CreateCommand();
        //    string selectText = "select S.StudentID, S.StudentName as FirstName, S.StudentSurname as Surname, S.StudentPatronymic as MiddleName, SUM (SA.PointsCount) as Score, SS.SpecialtyID, SS.Orderr as Orderr"
        //    + " from StudentsAchievements as SA, students as S, Specialty as Sp, StudentsSpecialty as SS"
        //    + " where SA.StudentID = S.StudentID AND SS.StudentID = S.StudentID AND Sp.SpecialtyID = SS.SpecialtyID AND S.Deleted = 0 AND S.Compliance = @Compliance AND FirstName = @FN AND Surname = @SN AND MiddleName = @MN"
        //    + " group by S.StudentID, SS.SpecialtyID order by Score desc";
        //    selectCommand.CommandText = selectText;
        //    selectCommand.Parameters.AddWithValue("@Compliance", Compliance);
        //    selectCommand.Parameters.AddWithValue("@FN", FN);
        //    selectCommand.Parameters.AddWithValue("@SN", SN);
        //    selectCommand.Parameters.AddWithValue("@MN", MN);
        //    DataTable studentsDT = new DataTable();
        //    studentsDT.Reset();
        //    SQLiteDataAdapter selectDA = new SQLiteDataAdapter(selectCommand);
        //    selectDA.Fill(studentsDT);
        //    conn.Close();
        //    return studentsDT;
        //}

        //public DataTable StudentSelect()
        //{
        //    SQLiteConnection conn = new SQLiteConnection("Data Source=pmfi.db; Version=3;");
        //    conn.Open();
        //    SQLiteCommand selectCommand = conn.CreateCommand();
        //    string selectText = "select S.StudentID, (S.StudentSurname || ' ' || S.StudentName || ' ' || S.StudentPatronymic) as FIO, SUM (SA.PointsCount) as Points"
        //    + " from StudentsAchievements as SA, students as S"
        //    + " where SA.StudentID = S.StudentID AND S.Deleted = 0"
        //    + " group by S.StudentID";
        //    selectCommand.CommandText = selectText;
        //    DataTable studentsDT = new DataTable();
        //    studentsDT.Reset();
        //    SQLiteDataAdapter selectDA = new SQLiteDataAdapter(selectCommand);
        //    selectDA.Fill(studentsDT);
        //    conn.Close();
        //    return studentsDT;
        //}

        //public DataTable StudentSelect(string FIO, int Compliance)
        //{
        //    SQLiteConnection conn = new SQLiteConnection("Data Source=pmfi.db; Version=3;");
        //    conn.Open();
        //    SQLiteCommand selectCommand = conn.CreateCommand();
        //    string selectText = "select S.StudentID, (S.StudentSurname || ' ' || S.StudentName || ' ' || S.StudentPatronymic) as FIO, SUM (SA.PointsCount) as Points"
        //    + " from StudentsAchievements as SA, students as S"
        //    + " where SA.StudentID = S.StudentID AND S.Deleted = 0 AND FIO = @Fio AND S.Compliance = @Compliance"
        //    + " group by S.StudentID";
        //    selectCommand.CommandText = selectText;
        //    selectCommand.Parameters.AddWithValue("@Fio", FIO);
        //    selectCommand.Parameters.AddWithValue("@Compliance", Compliance);
        //    DataTable studentsDT = new DataTable();
        //    studentsDT.Reset();
        //    SQLiteDataAdapter selectDA = new SQLiteDataAdapter(selectCommand);
        //    selectDA.Fill(studentsDT);
        //    conn.Close();
        //    return studentsDT;
        //}
    }
}
