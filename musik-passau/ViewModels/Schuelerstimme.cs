namespace ViewModels;

public class Schuelerstimme
{
    public Schuelerstimme(string titel)
    {
        this.titel = titel;
    }

    public Schuelerstimme()
    {
    }

    private string? titel;
    public string Ueberschrifft => titel ??
                                   $"{Name}, {(int) ((DateTime.Now - Geburtstag).Days / 365.25)}, {(SchuelerTyp == SchuelerTyp.Gesang ? "Gesangsschüler" : "Klavierschüler")}{(Maennlich ? "" : "in")} seit {SchuelerSeit}";
    
    public string Name { get; set; }
    public DateTime Geburtstag { get; set; }
    public SchuelerTyp SchuelerTyp { get; set; }
    public bool Maennlich { get; set; }
    public int SchuelerSeit { get; set; }
    public string ImageSrc { get; set; }
    public string Bewertung { get; set; }
}

public enum SchuelerTyp
{
    Klavier,
    Gesang
}