using System.Security.Cryptography;

var OutputDir = "../../../../../_data/comments";
var BaseCommentIdx = 100;

static string CreateMD5(string input)
{
    // Use input string to calculate MD5 hash
    using (MD5 md5 = MD5.Create())
    {
        byte[] inputBytes = System.Text.Encoding.UTF8.GetBytes(input);
        byte[] hashBytes = md5.ComputeHash(inputBytes);

        return Convert.ToHexString(hashBytes);
    }
}


var comments = File.ReadAllLines("comments.txt");
int i = 0;
foreach (var comment in comments)
{
    i++;
    var fields = comment.Split('|');
    if (fields.Length != 6)
    {
        throw new Exception("Missing fields in line " + i);
    }

    int k = 0;
    var slug = fields[k++];
    var name = fields[k++];
    var email = fields[k++].Trim().ToLower();
    var emailmd5 = CreateMD5(email).ToLower();
    var url = fields[k++];
    var date = fields[k++];
    var message = fields[k++].Replace("\"", "\\\"");
    
    var folder = Path.Combine(OutputDir, slug);
    Directory.CreateDirectory(folder);

    var filePath = Path.Combine(folder, "comment" + (i + BaseCommentIdx) + ".yml");
    var fileContents = $"message: \"{message}\"\r\n"
        + $"name: {name}\r\n"
        + $"emailmd5: {emailmd5}\r\n"
        + $"date: '{date}'\r\n";
    if (!string.IsNullOrEmpty(url))
    {
        fileContents += $"url: '{url}'\r\n";
    }
    File.WriteAllText(filePath, fileContents);
    Console.WriteLine(filePath);
}
