using System.Data;
using System.Data.SQLite;

namespace Infrastructure.Orm.Entities
{
    public class Students
    {
        public DataTable StudentSelect(string FIO,int spec, int Compliance)
        {
            SQLiteConnection conn = new SQLiteConnection("Data Source=pmfi_full.db; Version=3;");
            conn.Open();
            SQLiteCommand selectCommand = conn.CreateCommand();
            string selectText = "select S.StudentID as ID, S.StudentName as FirstName, S.StudentSurname as Surname, S.StudentPatronymic as MiddleName, SUM (SA.PointsCount) as Score, Sp.SpecialtyID as specID, Sp.SpecialtyName as specName, Sp.SpecialtyCount as specCount, SS.Orderr as Orderr, (S.StudentSurname || ' ' || S.StudentName || ' ' || S.StudentPatronymic) as FIO"
            + " from StudentsAchievements as SA, students as S, Specialty as Sp, StudentsSpecialty as SS"
            + " where SA.StudentID = S.StudentID AND SS.StudentID = S.StudentID AND Sp.SpecialtyID = SS.SpecialtyID AND S.Deleted = 0 AND S.Compliance = @Compliance AND FIO like @fio AND specID = @specid"
            + " group by S.StudentID, Sp.SpecialtyID order by Score desc";
            selectCommand.CommandText = selectText;
            selectCommand.Parameters.AddWithValue("@Compliance", Compliance);
            selectCommand.Parameters.AddWithValue("@fio", "%" + FIO + "%");
            selectCommand.Parameters.AddWithValue("@specid", spec);
            DataTable studentsDT = new DataTable();
            studentsDT.Reset();
            SQLiteDataAdapter selectDA = new SQLiteDataAdapter(selectCommand);
            selectDA.Fill(studentsDT);
            conn.Close();
            return studentsDT;
        }
    }
}
